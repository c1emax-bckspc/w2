import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");
  const handleInputText = (text) => {
    setInputText(text);
  };
  const setTask = () => {
    props.add(inputText);
  };
  return (
    <View style={{ flexDirection: "row", gap: 5 }}>
      <TextInput
        style={{ borderWidth: 1, borderStyle: "solid", width: 200 }}
        placeholder="Insert Task"
        onChangeText={handleInputText}
      />
      <Button onPress={setTask} title="Click" />
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({});
