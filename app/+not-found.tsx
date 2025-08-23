import { Link, Stack } from "expo-router";
import { StyleSheet, Image } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemeView";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Not Found" }} />
      <ThemedView style={styles.container}>
        <Image
          source={require("@/assets/images/cross.jpg")} // Add this image to your assets / images folder
          style={styles.image}
        />
        <ThemedText type="title">Page Not Found 🙏</ThemedText>
        <ThemedText type="default">
          The path you’re trying to access doesn’t exist in the Bible app.
        </ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go back to the Bible Home 📖</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: "contain",
  },
  link: {
    marginTop: 20,
    paddingVertical: 10,
  },
});
