//  ← setup for bottom tabs
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemeView";
import HomeScreen from "@/screens/HomeScreen";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: "መጀመሪያ" }} />
        <Tabs.Screen name="explore" options={{ title: "የመዝሙር ምዕራፍ" }} />
      </Tabs>
      <ThemedView>
        <ThemedText type="title">Welcome!</ThemedText>
        <ThemedText type="title">Hello World!</ThemedText>
        <HomeScreen />
      </ThemedView>
    </>
  );
}
