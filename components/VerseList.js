import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function VerseList({ verses }) {
  return (
    <ImageBackground
      source={require("@/assets/images/home_screen.jpg")} // Ensure this path is correct
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        {verses.map((verse, index) => (
          <View key={index} style={styles.verseContainer}>
            <Text style={styles.verseNumber}>{index + 1}፡</Text>
            <Text style={styles.verseText}>{verse}</Text>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scroll: {
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.5)", // overlay for readability
  },
  verseContainer: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "flex-start",
  },
  verseNumber: {
    fontFamily: "NotoEthiopic",
    color: "white",
    fontSize: 16,
    marginRight: 6,
  },
  verseText: {
    fontSize: 16,
    color: "white",
    flex: 1,
  },
});
