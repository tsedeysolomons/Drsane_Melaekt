import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "@/screens/HomeScreen";
import ChapterScreen from "@/screens/ChapterScreen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const Drawer = createDrawerNavigator();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    NotoEthiopic: require("@/assets/fonts/NotoSansEthiopic.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="መጀመሪያ" component={HomeScreen} />
        <Drawer.Screen name="መዝሙር" component={ChapterScreen} />
        {/* Add other books/screens here */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
