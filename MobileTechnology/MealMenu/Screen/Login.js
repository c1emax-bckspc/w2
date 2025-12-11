import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { signpInFunction } from "../firebaseConfig";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toSignUp = () => {
    navigation.navigate("SignUp");
  };
  const handleLogin = async () => {
    try {
      const response = await signpInFunction(email, password);
      navigation.navigate("MealsCategories");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.rowStyle}>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
        </View>
        <View style={styles.rowStyle}>
          <TextInput
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
          />
        </View>
        <Pressable onPress={handleLogin} style={styles.logcontainer}>
          <Text style={styles.logText}>Login</Text>
        </Pressable>
        <Pressable
          onPress={toSignUp}
          style={[styles.logcontainer, { backgroundColor: "#42b72a" }]}
        >
          <Text style={styles.logText}>Create new account</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f2f25",
    alignItems: "center",
    padding: 15,
  },
  innerContainer: {
    backgroundColor: "white",
    width: "80%",
    gap: 20,
    padding: 20,
    borderRadius: 5,
  },
  rowStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#e0e0e0",
  },
  logcontainer: {
    borderRadius: 10,
    borderColor: "#e0e0e0",
    alignItems: "center",
    backgroundColor: "#0866ff",
    padding: 10,
  },
  logText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
