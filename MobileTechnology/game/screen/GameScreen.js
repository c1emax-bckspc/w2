import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Title from "../component/Title";
import color from "../constant/color";
import PrimaryButton from "../component/PrimaryButton";
const GameScreen = ({ enteredNumber }) => {
  const Intnumber = parseInt(enteredNumber);
  // enteredNumber 55 taasan 7s baga 7-99 92 7-999
  const [ami, setAmi] = useState(5);
  const randomNumber = (max, min) => {
    let number = Math.floor(Math.random() * (max - min) + min);
    return number;
  };
  const [guesNumber, setGuesNumber] = useState(randomNumber(99, 1));
  const taahLOW = () => {
    if (Intnumber > guesNumber) {
      Alert.alert("Анхаар", "Зөв байна", [{ text: "Cancel" }]);
      setGuesNumber(randomNumber(Intnumber, guesNumber));
    } else if (Intnumber == guesNumber) {
      Alert.alert("Анхаар", "Хожлоо", [{ text: "Cancel" }]);
    } else {
      if (ami > 0) {
        setAmi(ami - 1);
        Alert.alert("Анхаар", "Буруу байна", [{ text: "Cancel" }]);
      } else Alert.alert("Анхаар", "Хожигдлоо", [{ text: "Cancel" }]);
    }
  };
  const taahHIGH = () => {
    if (Intnumber < guesNumber) {
      Alert.alert("Анхаар", "Зөв байна", [{ text: "Cancel" }]);
      setGuesNumber(randomNumber(guesNumber, Intnumber));
    } else if (Intnumber == guesNumber) {
      Alert.alert("Анхаар", "Хожлоо", [{ text: "Cancel" }]);
    } else {
      if (ami > 0) {
        setAmi(ami - 1);
        Alert.alert("Анхаар", "Буруу байна", [{ text: "Cancel" }]);
      } else Alert.alert("Анхаар", "Хожигдлоо", [{ text: "Cancel" }]);
    }
  };
  console.log(typeof Intnumber);
  console.log(Intnumber);
  return (
    <View style={styles.container}>
      <Title>GameScreen</Title>
      <View style={styles.numberContainer}>
        <Text style={styles.numberStyle}>{guesNumber}</Text>
        <Text>{Intnumber}</Text>
      </View>
      <View>
        <Text style={styles.textStyle}>{ami}</Text>
      </View>
      <View>
        {" "}
        <Text style={styles.textStyle}>HIGH OR LOW ?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={taahLOW}>LOW</PrimaryButton>
        <PrimaryButton onPress={taahHIGH}>HIGH</PrimaryButton>
      </View>
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
  numberContainer: {
    padding: 2,
    borderWidth: 2,
    borderColor: color.yellow500,
    width: 100,
  },
  numberStyle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: color.yellow500,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: color.yellow500,
  },
});
