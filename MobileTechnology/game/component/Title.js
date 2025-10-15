import { StyleSheet, Text, View } from "react-native";
import React from "react";
import color from "../constant/color";
const Title = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    fontWeight: "bold",
    color: color.yellow500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: color.yellow500,
  },
});
