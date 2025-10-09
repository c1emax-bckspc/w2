import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../component/PrimaryButton";

const StartScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const numberinputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };
  const numberConfirm = () => {
    Alert.alert("Number orson bn");
  };
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={numberinputHandler}
        maxLength={2}
        keyboardType="number-pad"
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton onPress={numberConfirm}>Confirm</PrimaryButton>
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
