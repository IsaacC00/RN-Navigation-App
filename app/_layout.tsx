import React, { useEffect } from 'react';
import { Platform } from 'react-native';

import { Slot, SplashScreen } from 'expo-router';
import * as NavigationBar from 'expo-navigation-bar';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

import './global.css';

SplashScreen.preventAutoHideAsync();

const android = Platform.OS === 'android';

if (android) {
  NavigationBar.setBackgroundColorAsync('white');
}

const RootLayout = () => {

  //? importamos las fuentes y tomamos el error y la carga
  const [fontLoaded, error] = useFonts({
    'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
    'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
  });

  useEffect(() => {
    if (error) throw new Error("");

    if (fontLoaded) SplashScreen.hideAsync();

  }, [fontLoaded, error])

  if (!fontLoaded && !error) return null;

  //? el slot funcion renderizando el hijo o las vistas que encuentre en la carpeta app
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Slot />
        <StatusBar style='dark' />
      </GestureHandlerRootView>
    </>
  )

}

export default RootLayout