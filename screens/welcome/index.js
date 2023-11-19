import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";

const DesignGeneratorScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AI Graphic Design Generator</Text>
        <Text style={styles.subtitle}>Generate Your Very Own Dress Design</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={require("./Untitled (95).png")} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333"
  },
  subtitle: {
    fontSize: 18,
    color: "#666"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
});
export default DesignGeneratorScreen;