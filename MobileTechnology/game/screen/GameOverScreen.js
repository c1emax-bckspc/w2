import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../component/Title";
import PrimaryButton from "../component/PrimaryButton";

const GameOverScreen = ({ resetGame }) => {
  return (
    <View style={styles.container}>
      <Title>Game Over</Title>
      <PrimaryButton onPress={resetGame}>Reset</PrimaryButton>
      <Title> ТА Хожлоо</Title>
      <Title> ТА Хожигдлоо</Title>
    </View>
  );
};

export default GameOverScreen;

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
