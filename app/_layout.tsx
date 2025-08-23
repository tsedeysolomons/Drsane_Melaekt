import { Slot } from "expo-router";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function RootLayout() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        NotoEthiopic: require("../assets/fonts/NotoSansEthiopic.ttf"),
      });
      setLoaded(true);
    }

    loadFonts();
  }, []);

  if (!loaded) return <View />;

  return <Slot />;
}
