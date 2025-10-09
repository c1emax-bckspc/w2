import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.baseButton,
          pressed ? styles.pressedButton : null,
        ]}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  buttonContainer: {
    margin: 5,
  },
  baseButton: {
    width: 100,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#72063c",
    alignItems: "center",
    justifyContent: "center",
  },
  pressedButton: {
    opacity: 0.5,
  },
});
