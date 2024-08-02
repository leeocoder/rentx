import Home from '@screens/Home';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Text, View } from 'react-native';

import { ThemeProvider } from 'styled-components';

import { useFonts } from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';
import theme from './src/styles/theme';
import CarDetails from '@screens/CarDetails';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Schedule from '@screens/Schedule';
import ScheduleDetails from '@screens/ScheduleDetails';
import ScheduleComplete from '@screens/ScheduleComplete';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Any other preparation logic can go here
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  if (!appIsReady || !fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <View
          style={{ flex: 1 }}
          onLayout={onLayoutRootView}
        >
          {/* <Home /> */}
          {/* <CarDetails /> */}
          {/* <Schedule /> */}
          {/* <ScheduleDetails /> */}
          <ScheduleComplete />
          <StatusBar
            style='auto'
            translucent
            backgroundColor='transparent'
          />
        </View>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
