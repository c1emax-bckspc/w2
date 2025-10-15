import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../component/Title";

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Title>GameScreen</Title>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 20,
    gap: 10,
  },
});
