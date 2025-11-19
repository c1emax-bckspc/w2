import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/mealdata";

const MealItem = ({
  mealId,
  title,
  img,
  ingredients,
  steps,
  duration,
  complexity,
  affordability,
  isGlutenFree,
  isVegan,
  isVegetarian,
  isLactoseFree,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: img }} style={styles.ImageStyle} />
      <View style={styles.innercontainer}>
        <Text> {ingredients}</Text>
        <Text> {steps}</Text>
        <Text>{duration}</Text>
        <Text>{complexity}</Text>
        <Text>{affordability}</Text>
      </View>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "orange",
  },
  ImageStyle: {
    width: "100%",
    height: 200,
  },
  innercontainer: {
    padding: 5,
  },
  TitleStyle: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    fontSize: 20,
  },
});
