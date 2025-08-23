import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={{ uri: ".assets/images/home_screen.jpg" }} // Or use a local image
      style={styles.bg}
    >
      <View style={styles.overlay}>
        <Text style={styles.amharic}>
          በእንኳን ለእኛም እንዲኖር በአንተ የተመሰከረው ግንባር ነው
        </Text>
        <Text style={styles.verse}>መዝሙር ምዕራፍ 60:4</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: "center" },
  overlay: { padding: 20, backgroundColor: "rgba(0,0,0,0.4)" },
  amharic: {
    fontSize: 20,
    color: "white",
    fontFamily: "NotoEthiopic",
    textAlign: "center",
  },
  verse: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
});
