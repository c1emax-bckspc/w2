import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import StartScreen from "./screen/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import BGImage from "./assets/background.png";
export default function App() {
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
        <StartScreen />
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
