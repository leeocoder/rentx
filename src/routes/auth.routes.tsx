import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Confirmation from '@screens/Confirmation';
import SignIn from '@screens/SignIn';
import SignUpFirstStepData from '@screens/SignUp/SignUpFirstStepData';
import SignUpSecondStepAuth from '@screens/SignUp/SignUpSecondStepAuth';

import { RootStackParamList } from './app.stack.routes';

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

const AuthRoutes = () => {
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
        name='SignUpSecondStepAuth'
        component={SignUpSecondStepAuth}
      />
      <Screen
        name='Confirmation'
        component={Confirmation}
      />
    </Navigator>
  );
};

export default AuthRoutes;
