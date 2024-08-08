import Arrow from '@assets/images/arrow-left.svg';
import BackButton from '@components/BackButton';
import Button from '@components/Button';
import Calendar, { MarkedDateProps } from '@components/Calendar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { formatDate } from '@utils/format-date.util';
import { generateInterval } from '@utils/generate-interval';

import { addDays } from 'date-fns';
import { useState } from 'react';
import { DateData } from 'react-native-calendars';
import { useTheme } from 'styled-components';

import { ScheduleNavigationProp } from '../../routes/routes-types';
import {
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  Header,
  RentalPeriod,
  Title,
} from './styles';
import { Alert } from 'react-native';
import { CarServerInterface } from '../../interfaces/car-server.interface';

export interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

interface Params {
  car: CarServerInterface;
}

const Schedule = () => {
  const navigation = useNavigation<ScheduleNavigationProp>();

  const route = useRoute();
  const { car } = route.params as Params;

  const [lastSelectedDate, setLastSelectedDate] = useState<any>({});
  const [markedDate, setMarkedDate] = useState<MarkedDateProps>({});
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>();

  function handleConfirmRental() {
    if (!rentalPeriod?.startFormatted || !rentalPeriod?.startFormatted) {
      return Alert.alert('Selecione o intervalo para alugar.');
    }

    const data = {
      car,
      dates: Object.keys(markedDate),
    };

    navigation.navigate('ScheduleDetails', data);
  }

  function handleChangeDate(date: DateData) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDate(interval);
    const lastOne = Object.keys(interval).length - 1;
    const firstDate = new Date(Object.keys(interval)[0]);
    const lastDate = new Date(Object.keys(interval)[lastOne]);

    setRentalPeriod({
      startFormatted: formatDate(addDays(firstDate, 1)),
      endFormatted: formatDate(addDays(lastDate, 1)),
    });
  }

  const { colors } = useTheme();
  return (
    <Container>
      <Header>
        <BackButton
          onPress={() => {}}
          color={colors.shape}
        />
        <Title>
          Escolha uma {'\n'}
          data de inicio {'\n'}
          fim do aluguel {'\n'}
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod?.startFormatted}>
              {rentalPeriod?.startFormatted}
            </DateValue>
          </DateInfo>
          <Arrow />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod?.endFormatted}>
              {rentalPeriod?.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar
          markedDates={markedDate}
          onDayPress={handleChangeDate}
        />
      </Content>
      <Footer>
        <Button
          title='Confirmar'
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
};

export default Schedule;
