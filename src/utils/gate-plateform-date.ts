import { addDays } from 'date-fns';
import { Platform } from 'react-native';

export function geTPlatFormDate(date: Date) {
  if (Platform.OS === 'ios') {
    return addDays(date, 1);
  }
  return date;
}