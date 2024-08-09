import Speed from '@assets/images/speed.svg';
import Accessory from '@components/Accessory';
import BackButton from '@components/BackButton';
import Button from '@components/Button';
import ImageSlider from '@components/ImageSlider';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { ScheduleDetailsNavigationProp } from '../../routes/routes-types';
import {
  Accessories,
  Brand,
  CalendarIcon,
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
  RentalPeriod,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';
import { CarServerInterface } from '../../interfaces/car-server.interface';
import { getAccessoriesIcon } from '@utils/get-accessories-icon';
import { formatNumberAsCurrency } from '@utils/format-number-as-currency.util';
import { formatDate } from '@utils/format-date.util';
import { addDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { api } from '@services/api';

interface Params {
  car: CarServerInterface;
  dates: string[];
}

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

const ScheduleDetails = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>();
  const navigation = useNavigation<ScheduleDetailsNavigationProp>();

  useEffect(() => {
    const start = dates[0];
    const end = dates[dates.length - 1];
    const startFormatted = formatDate(addDays(new Date(start), 1));
    const endFormatted = formatDate(addDays(new Date(end), 1));
    setRentalPeriod({ startFormatted, endFormatted });
  }, []);

  const route = useRoute();
  const { car, dates } = route.params as Params;

  async function handleConfirmCarRental() {
    setLoading(true);
    await api
      .post('schedules_byuser', {
        user_id: 1,
        car,
        startDate: rentalPeriod?.startFormatted,
        endDate: rentalPeriod?.endFormatted,
      })
      .then(() => {
        setLoading(false);
        navigation.navigate('ScheduleComplete');
      })
      .catch((err) => {
        setLoading(false);
        console.error('Failed to create schedule', err);
      });
  }

  const theme = useTheme();
  return (
    <Container>
      <Header>
        <ImageSlider images={car.photos}>
          <BackButton onPress={() => navigation.goBack()} />
        </ImageSlider>
      </Header>
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>{formatNumberAsCurrency(car.rent.price)}</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoriesIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod?.startFormatted}</DateValue>
          </DateInfo>
          <Feather
            name='chevron-right'
            size={10}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod?.endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              {formatNumberAsCurrency(car.rent.price)} x{dates.length} diárias
            </RentalPriceQuota>
            <RentalPriceTotal>
              {formatNumberAsCurrency(car.rent.price * dates.length)}
            </RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          title='Alugar agora'
          color={theme.colors.success}
          onPress={handleConfirmCarRental}
          enable={!loading}
          isLoading={loading}
        />
      </Footer>
    </Container>
  );
};

export default ScheduleDetails;
