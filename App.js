import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import ChapterScreen from "./screens/ChapterScreen";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Drawer = createDrawerNavigator();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    NotoEthiopic: require("@/assets/fonts/NotoSansEthiopic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Wait for fonts to load
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="መጀመሪያ" component={HomeScreen} />
        <Drawer.Screen name="መዝሙር" component={ChapterScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
