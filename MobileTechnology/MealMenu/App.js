import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigation } from "@react-navigation/stack";
import CatergoriesScreen from "./Screen/CatergoriesScreen";
import MealsOverviewScreen from "./Screen/MealsOverviewScreen";
const Stack = createNativeStackNavigation();
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Screen name="MealsCategories" component={CatergoriesScreen} />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      </NavigationContainer>
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
