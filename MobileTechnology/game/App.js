import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaViewBase,
} from "react-native";
import StartScreen from "./screen/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import BGImage from "./assets/background.png";
import GameScreen from "./screen/GameScreen";
import { useState } from "react";
export default function App() {
  const [checkEnteredNumber, setCheckEnteredNumber] = useState();
  const changeScreen = (number) => {
    setCheckEnteredNumber(number);
  };
  let screen = <StartScreen check={changeScreen} />;
  if (checkEnteredNumber) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#4e0329", "#ddb52f"]}
      style={styles.container}
    >
      <ImageBackground
        source={BGImage}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.imageBg}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    opacity: 0.2,
  },
});
