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
import color from "../constant/color";
import Title from "../component/Title";
const StartScreen = ({ check }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const numberinputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };
  const numberReset = () => {
    setEnteredNumber("");
  };
  const numberConfirm = () => {
    const choseNumber = parseInt(enteredNumber);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert("Анхаар", "1-99 Хооронд тоо оруулна уу!", [
        { text: "Cancel", onPress: numberReset },
      ]);
    } else check(enteredNumber);
  };

  return (
    <View style={styles.container}>
      {" "}
      <Title>StartScreen</Title>
      <View style={styles.InnerContainer}>
        <TextInput
          value={enteredNumber}
          onChangeText={numberinputHandler}
          maxLength={2}
          keyboardType="number-pad"
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={numberReset}>Reset</PrimaryButton>
          <PrimaryButton onPress={numberConfirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 20,
    gap: 10,
  },
  InnerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.purple500,
    borderRadius: 8,
    padding: 15,
  },
  input: {
    padding: 1,
    width: 50,
    height: 50,
    fontSize: 25,
    borderBottomColor: color.yellow500,
    color: color.yellow500,
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
