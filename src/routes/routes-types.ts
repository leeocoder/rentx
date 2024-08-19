import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './stack.routes';

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CarDetails'
>;

export type ScheduleNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Schedule'
>;

export type CarDetailsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CarDetails'
>;

export type ScheduleCompleteNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ScheduleComplete'
>;

export type ScheduleDetailsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ScheduleDetails'
>;

export type MyCarsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MyCars'
>;

export type SignInNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

export type SignUpFirstStepDataNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUpFirstStepData'
>;
