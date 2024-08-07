import React from 'react';
import {
  Calendar as CustomCalendar,
  DateData,
  LocaleConfig,
} from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { prBR } from '@utils/locale-config';

export interface MarkedDateProps {
  [date: string]: {
    color: string;
    text: string;
    disabled?: boolean;
    disabledTouchableEvent?: boolean;
  };
}

interface CalendarProps {
  markedDates: MarkedDateProps;
  onDayPress: (date: DateData) => void;
}

LocaleConfig.locales['pt-br'] = prBR;

LocaleConfig.defaultLocale = 'pt-br';

const Calendar = ({ markedDates, onDayPress }: CalendarProps) => {
  const theme = useTheme();
  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
          size={24}
          color={theme.colors.shape}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderWidth: 0.5,
        borderBottomColor: theme.colors.text_details,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        textMonthFontFamily: theme.fonts.secondary_600,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      markingType='period'
      markedDates={markedDates}
      firstDay={1}
      onDayPress={onDayPress}
      minDate={new Date().toDateString()}
    />
  );
};

export default Calendar;
