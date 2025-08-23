import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function Header() {
  return (
    <ImageBackground
      source={require("../assets/images/bible-bg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.amharicText}>
          በእንኳን ለእኛም እንዲኖር በአንተ የተመሰከረው ግንባር ነው
        </Text>
        <Text style={styles.reference}>መዝሙር 60:4</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 200,
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)", // optional dark overlay
    padding: 10,
  },
  amharicText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "NotoEthiopic",
    textAlign: "center",
  },
  reference: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },
});
