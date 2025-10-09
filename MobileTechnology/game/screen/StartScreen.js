import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import React from "react";
import PrimaryButton from "../component/PrimaryButton";

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <View style={styles.buttonContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: "#4e0329",
    borderRadius: 8,
  },
  input: {
    padding: 1,
    width: 50,
    height: 50,
    fontSize: 25,
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    borderBottomWidth: 2,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
