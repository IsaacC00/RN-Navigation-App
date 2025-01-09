import { useEffect } from 'react';

import { Slot, SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';

import './global.css';

SplashScreen.preventAutoHideAsync();

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
    
  }, [fontLoaded,error])

  if (!fontLoaded && !error )return null;

  //? el slot funcion renderizando el hijo o las vistas que encuentre en la carpeta app
  return <Slot />
  
}

export default RootLayout