import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';
import MyCars from '@screens/MyCars';

import AppStackRoutes, { RootStackParamList } from './app.stack.routes';
import { View } from 'react-native';

const { Screen, Navigator } = createBottomTabNavigator<RootStackParamList>();

const AppTabRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name='Home'
        component={AppStackRoutes}
      />
      <Screen
        name='Profile'
        component={function Profile() {
          return <View></View>;
        }}
      />
      <Screen
        name='MyCars'
        component={MyCars}
      />
    </Navigator>
  );
};

export default AppTabRoutes;
