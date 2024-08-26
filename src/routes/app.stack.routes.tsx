import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarDetails from '@screens/CarDetails';
import Home from '@screens/Home';
import Schedule from '@screens/Schedule';
import Confirmation from '@screens/Confirmation';
import ScheduleDetails from '@screens/ScheduleDetails';
import { UserSignUpFirstStep } from '@screens/SignUp/SignUpFirstStepData';

import { CarServerInterface } from '../interfaces/car-server.interface';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  MyCars: undefined;
  CarDetails: {
    data: CarServerInterface;
  };
  Schedule: {
    car: CarServerInterface;
  };
  Confirmation: {
    title: string;
    message: string;
    confirmationRoute: string;
  };
  SignIn: undefined;
  ScheduleDetails: {
    car: CarServerInterface;
    dates: string[];
  };
  SignUpFirstStepData: undefined;
  SignUpSecondStepAuth: {
    user: UserSignUpFirstStep;
  };
};

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

const AppStackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name='Home'
        component={Home}
      />
      <Screen
        name='CarDetails'
        component={CarDetails}
      />
      <Screen
        name='Schedule'
        component={Schedule}
      />
      <Screen
        name='Confirmation'
        component={Confirmation}
      />
      <Screen
        name='ScheduleDetails'
        component={ScheduleDetails}
      />
    </Navigator>
  );
};

export default AppStackRoutes;
