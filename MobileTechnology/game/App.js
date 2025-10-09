import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartScreen from "./screen/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#4e0329", "#ddb52f"]}
      style={styles.container}
    >
      <StartScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
