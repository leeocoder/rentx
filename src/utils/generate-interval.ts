import { eachDayOfInterval, format } from 'date-fns';
import theme from '../styles/theme';
import { DateData } from 'react-native-calendars';
import { geTPlatFormDate } from './gate-plateform-date';
import { MarkedDateProps } from '@components/Calendar';

export function generateInterval(
  start: DateData,
  end: DateData
): MarkedDateProps {
  let interval: any = {};

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach((item) => {
    const data = format(geTPlatFormDate(item), 'yyyy-MM-dd');
    interval = {
      ...interval,
      [data]: {
        color:
          start.dateString === data || end.dateString === data
            ? theme.colors.main
            : theme.colors.main_light,
        textColor:
          start.dateString === data || end.dateString === data
            ? theme.colors.main_light
            : theme.colors.main,
      },
    };
  });

  return interval;
}
