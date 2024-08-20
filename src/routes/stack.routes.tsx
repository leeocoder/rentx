import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarDetails from '@screens/CarDetails';
import Home from '@screens/Home';
import MyCars from '@screens/MyCars';
import Schedule from '@screens/Schedule';
import ScheduleComplete from '@screens/ScheduleComplete';
import ScheduleDetails from '@screens/ScheduleDetails';
import SignIn from '@screens/SignIn';
import SignUpFirstStepData from '@screens/SignUp/SignUpFirstStepData';

import { CarServerInterface } from '../interfaces/car-server.interface';

export type RootStackParamList = {
  Home: undefined;
  MyCars: undefined;
  CarDetails: {
    data: CarServerInterface;
  };
  Schedule: {
    car: CarServerInterface;
  };
  ScheduleComplete: undefined;
  SignIn: undefined;
  ScheduleDetails: {
    car: CarServerInterface;
    dates: string[];
  };
  SignUpFirstStepData: undefined;
};

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='SignIn'
    >
      <Screen
        name='SignIn'
        component={SignIn}
      />
      <Screen
        name='SignUpFirstStepData'
        component={SignUpFirstStepData}
      />
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
        name='ScheduleComplete'
        component={ScheduleComplete}
      />
      <Screen
        name='ScheduleDetails'
        component={ScheduleDetails}
      />
      <Screen
        name='MyCars'
        component={MyCars}
      />
    </Navigator>
  );
};

export default StackRoutes;
