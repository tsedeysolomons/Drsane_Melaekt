import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";

export default function ChapterScreen() {
  const verses = [
    { id: 1, text: "Blessed [is] the man that walketh not in..." },
    { id: 2, text: "But his delight [is] in the law of the LORD..." },
    { id: 3, text: "And he shall be like a tree planted..." },
    // Add more verses...
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.chapterTitle}>Chapter 1</Text>
      {verses.map((verse) => (
        <View key={verse.id} style={styles.verseBox}>
          <Text style={styles.verseNumber}>፩{verse.id}</Text>
          <Text style={styles.verseText}>{verse.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#5D47A6", flex: 1 },
  chapterTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 15,
  },
  verseBox: { marginBottom: 10, flexDirection: "row" },
  verseNumber: {
    fontFamily: "NotoEthiopic",
    fontSize: 18,
    color: "white",
    marginRight: 5,
  },
  verseText: { color: "white", flexShrink: 1 },
});
