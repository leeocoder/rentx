import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarDetails from '@screens/CarDetails';
import Home from '@screens/Home';
import Schedule, { RentalPeriod } from '@screens/Schedule';
import ScheduleComplete from '@screens/ScheduleComplete';
import ScheduleDetails from '@screens/ScheduleDetails';
import { CarServerInterface } from '../interfaces/car-server.interface';
import MyCars from '@screens/MyCars';
import SignIn from '@screens/SignIn';

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
      <Screen
        name='SignIn'
        component={SignIn}
      />
    </Navigator>
  );
};

export default StackRoutes;
