import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './app.stack.routes';

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

export type ConfirmationNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Confirmation'
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

export type SignUpSecondStepAuthNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUpSecondStepAuth'
>;
