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

const Schedule = () => {
  const [lastSelectedDate, setLastSelectedDate] = useState<any>({});
  const [markedDate, setMarkedDate] = useState<MarkedDateProps>({});
  function handleChangeDate(date: DateData) {
    console.log(date);

    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      const startDate = start;
      start = end;
      end = startDate;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDate(interval);
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
            <DateValue selected={false}></DateValue>
          </DateInfo>
          <Arrow />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}></DateValue>
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
