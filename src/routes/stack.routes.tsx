import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarDetails from '@screens/CarDetails';
import Home from '@screens/Home';
import Schedule from '@screens/Schedule';
import ScheduleComplete from '@screens/ScheduleComplete';
import ScheduleDetails from '@screens/ScheduleDetails';
import { CarServerInterface } from '../interfaces/car-server.interface';

export type RootStackParamList = {
  Home: undefined;
  CarDetails: {
    data: CarServerInterface;
  };
  Schedule: undefined;
  ScheduleComplete: undefined;
  ScheduleDetails: undefined;
};

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

const StackRoutes = () => {
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
        name='ScheduleComplete'
        component={ScheduleComplete}
      />
      <Screen
        name='ScheduleDetails'
        component={ScheduleDetails}
      />
    </Navigator>
  );
};

export default StackRoutes;
