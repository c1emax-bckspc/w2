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
import GameOverScreen from "./screen/GameOverScreen";
export default function App() {
  const [checkEnteredNumber, setCheckEnteredNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [resetState, setResetState] = useState(false);
  const changeScreen = (number) => {
    setCheckEnteredNumber(number);
    setResetState(false);
    console.log(checkEnteredNumber);
  };
  let screen = <StartScreen check={changeScreen} />;

  const checkGameOver = () => {
    setGameOver(true);
  };
  const gameReset = () => {
    setResetState(true);
    setGameOver(false);
    console.log("reset", resetState);
  };
  if (checkEnteredNumber) {
    screen = (
      <GameScreen
        enteredNumber={checkEnteredNumber}
        checkGameOver={checkGameOver}
      />
    );
  }
  if (gameOver) {
    screen = <GameOverScreen resetGame={gameReset} />;
  }
  if (resetState) {
    screen = <StartScreen check={changeScreen} />;
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
