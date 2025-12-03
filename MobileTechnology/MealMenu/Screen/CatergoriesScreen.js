import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/mealdata";
import CategoryGridTitle from "../components/CategoryGridTitle";

const CatergoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const onPress = () => {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    };
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPress}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        // columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

export default CatergoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f2f25",
  },
  // columnWrapper: {
  //   justifyContent: "space-between",
  // },
});
