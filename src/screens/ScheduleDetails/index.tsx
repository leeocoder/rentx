import BackButton from '@components/BackButton';
import {
  Container,
  Header,
  Accessories,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Price,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
  Period,
  CalendarIcon,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Rent,
  Footer,
} from './styles';
import ImageSlider from '@components/ImageSlider';
import Accessory from '@components/Accessory';
import Speed from '@assets/images/speed.svg';
import Button from '@components/Button';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { ScheduleDetailsNavigationProp } from '../../routes/routes-types';
import { useNavigation } from '@react-navigation/native';

const ScheduleDetails = () => {
  const navigation = useNavigation<ScheduleDetailsNavigationProp>();
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <ImageSlider images={[require('@assets/images/audi.png')]}>
          <BackButton onPress={() => navigation.goBack()} />
        </ImageSlider>
      </Header>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <Accessories>
          <Accessory
            name='380km/h'
            icon={Speed}
          />

          <Accessory
            name='380km/h'
            icon={Speed}
          />

          <Accessory
            name='380km/h'
            icon={Speed}
          />

          <Accessory
            name='380km/h'
            icon={Speed}
          />

          <Accessory
            name='380km/h'
            icon={Speed}
          />

          <Accessory
            name='380km/h'
            icon={Speed}
          />
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
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
          <Feather
            name='chevron-right'
            size={10}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          title='Alugar agora'
          color={theme.colors.success}
          onPress={() => navigation.navigate('ScheduleComplete')}
        />
      </Footer>
    </Container>
  );
};

export default ScheduleDetails;
