// _layout.tsx

import { Stack } from 'expo-router';
import '../global.css';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreenAnimation from '@/components/ui/SplashScreen';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Okra-Regular': require("../assets/fonts/Okra-Regular.ttf"),
    'Okra-Bold': require("../assets/fonts/Okra-Bold.ttf"),
    'Okra-MediumLight': require("../assets/fonts/Okra-MediumLight.ttf"),
    'Okra-Medium': require("../assets/fonts/Okra-Medium.ttf"),
    'Okra-ExtraBold': require("../assets/fonts/Okra-ExtraBold.ttf"),
  });
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      setTimeout(() => {
        setisLoaded(true);
      }, 800);
    }
    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || !isLoaded) {
    return <SplashScreenAnimation />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
    </GestureHandlerRootView>
  );
}