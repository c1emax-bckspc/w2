import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { signUpFunction } from "../firebaseConfig";
const SignUp = ({ navigation }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ToLogin = () => {
    navigation.navigate("Login");
    const response = signUpFunction(email, password);
    console.log("response", response);
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.rowStyle}>
          <TextInput
            onChangeText={setFirstname}
            value={firstname}
            placeholder="First name"
          />
        </View>
        <View style={styles.rowStyle}>
          <TextInput
            onChangeText={setLastname}
            value={lastname}
            placeholder="Last name"
          />
        </View>
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

        <Pressable
          onPress={ToLogin}
          style={[styles.logcontainer, { backgroundColor: "#42b72a" }]}
        >
          <Text style={styles.logText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;

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
