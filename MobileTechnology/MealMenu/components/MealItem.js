import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/mealdata";

const MealItem = ({
  MealId,
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
  navigation,
}) => {
  const handlePress = () => {
    navigation.navigate("MealDetail", { MealId: MealId });
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <Image source={{ uri: img }} style={styles.ImageStyle} />
        <View style={styles.innercontainer}>
          <Text style={styles.TitleStyle}>{title}</Text>
          <View style={styles.desc}>
            <View>
              <Text style={styles.textStyle}>{duration} minuts</Text>
            </View>
            <View>
              <Text style={styles.textStyle}>{complexity}</Text>
            </View>
            <View>
              <Text style={styles.textStyle}>{affordability}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "orange",
    marginBottom: 30,
    backgroundColor: "white",
    borderRadius: 5,
  },
  ImageStyle: {
    width: "100%",
    height: 200,
    borderRadius: 10,
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
  desc: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "semibold",
  },
});
