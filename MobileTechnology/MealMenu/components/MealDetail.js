import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import { MEALS } from "../data/mealdata";

const MealDetail = ({ route }) => {
  const MealId = route.params.MealId;
  const data = MEALS.filter((mealItem) => {
    return mealItem.id.indexOf(MealId) >= 0;
  });
  const renderIngredients = (itemData) => {
    <View> {itemData}</View>;
  };
  console.log(data);
  return (
    <View style={styles.container}>
      <Image source={{ uri: data[0].imageUrl }} style={styles.ImageStyle} />
      <View style={styles.innercontainer}>
        <Text style={styles.TitleStyle}>{data[0].title}</Text>
        <View style={styles.desc}>
          <View>
            <Text style={styles.textStyle}>{data[0].duration} minuts</Text>
          </View>
          <View>
            <Text style={styles.textStyle}>{data[0].complexity}</Text>
          </View>
          <View>
            <Text style={styles.textStyle}>{data[0].affordability}</Text>
          </View>
        </View>
        <View style={{ width: "80%", marginHorizontal: 50 }}>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "white",

              padding: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 25,
                color: "white",
                fontWeight: "semibold",
              }}
            >
              Ingredient
            </Text>
          </View>
          <View style={{ gap: 10, width: "100%" }}>
            {data[0].ingredients.map((item, index) => (
              <View style={{ backgroundColor: "white", padding: 5 }}>
                <Text style={{ textAlign: "center" }}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={{ width: "80%", marginHorizontal: 50 }}>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "white",

              padding: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 25,
                color: "white",
                fontWeight: "semibold",
              }}
            >
              Steps
            </Text>
          </View>
          <View style={{ gap: 10, width: "100%" }}>
            {data[0].steps.map((item, index) => (
              <View style={{ backgroundColor: "white", padding: 5 }}>
                <Text style={{ textAlign: "center" }}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "orange",
    marginBottom: 30,
    backgroundColor: "white",
    borderRadius: 5,
    backgroundColor: "#351401",
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
    color: "white",
  },
  desc: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
    marginBottom: 20,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "white",
  },
});
