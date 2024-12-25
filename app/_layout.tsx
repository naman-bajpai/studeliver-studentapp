// _layout.tsx

import { Stack } from 'expo-router';
import '../global.css';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from 'react';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    'Okra-Regular': require("../assets/fonts/Okra-Regular.ttf"),
    'Okra-Bold': require("../assets/fonts/Okra-Bold.ttf"),
    'Okra-MediumLight': require("../assets/fonts/Okra-MediumLight.ttf"),
    'Okra-Medium': require("../assets/fonts/Okra-Medium.ttf"),
    'Okra-ExtraBold': require("../assets/fonts/Okra-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      console.log('Fonts loaded successfully');
      SplashScreen.hideAsync();
    } else {
      console.log('Font loading failed');
    }
  }, [fontsLoaded]);

  console.log('Current fonts loaded:', fontsLoaded);

  if (!fontsLoaded) {
    console.log('Returning null because fonts are not loaded yet');
    return null;
  }

  console.log('Rendering layout');

  return <Stack screenOptions={{headerShown: false}}/>;
}