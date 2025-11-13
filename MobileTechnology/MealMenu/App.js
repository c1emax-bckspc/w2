import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import CatergoriesScreen from "./Screen/CatergoriesScreen";
import MealsOverviewScreen from "./Screen/MealsOverviewScreen";

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="MealsCategories" component={CatergoriesScreen} />
    //     <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CatergoriesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
