import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={{ gap: 10, width: "100%" }}>
          <View
            style={{
              backgroundColor: "white",
              padding: 5,
              marginBottom: 10,
            }}
          >
            <Text style={{ textAlign: "center" }}>{item}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 300,
  },
});
