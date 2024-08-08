import BackButton from '@components/BackButton';
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  Content,
  Footer,
  DateTitle,
  DateValue,
} from './styles';
import { useTheme } from 'styled-components';

import Arrow from '@assets/images/arrow-left.svg';
import Button from '@components/Button';
import Calendar, { MarkedDateProps } from '@components/Calendar';
import { ScheduleNavigationProp } from '../../routes/routes-types';
import { useNavigation } from '@react-navigation/native';
import { DayProps } from 'react-native-calendars/src/calendar/day';
import { useState } from 'react';
import { generateInterval } from '@utils/generate-interval';
import { DateData } from 'react-native-calendars';
import { addDays, format } from 'date-fns';
import { geTPlatFormDate } from '@utils/gate-plateform-date';
import { formatDate } from '@utils/format-date.util';

interface RentalPeriod {
  start: number;
  startFormatted: string;
  end: number;
  endFormatted: string;
}

const Schedule = () => {
  const [lastSelectedDate, setLastSelectedDate] = useState<any>({});
  const [markedDate, setMarkedDate] = useState<MarkedDateProps>({});
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>();

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
      start: addDays(new Date(firstDate), 1).getTime(),
      end: addDays(new Date(lastDate), 1).getTime(),
      startFormatted: formatDate(addDays(firstDate, 1)),
      endFormatted: formatDate(addDays(lastDate, 1)),
    });
  }

  const navigation = useNavigation<ScheduleNavigationProp>();
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
          onPress={() => navigation.navigate('ScheduleDetails')}
        />
      </Footer>
    </Container>
  );
};

export default Schedule;
