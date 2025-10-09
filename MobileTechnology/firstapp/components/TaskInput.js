import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");
  const handleInputText = (text) => {
    setInputText(text);
  };
  const setTask = () => {
    if (inputText !== "") {
      props.add(inputText);
      setInputText("");
    } else Alert.alert("Please enter task");
  };
  return (
    <Modal visible={props.on} animationType="slide">
      <View style={{ flexDirection: "row", gap: 5 }}>
        <TextInput
          style={{ borderWidth: 1, borderStyle: "solid", width: 200 }}
          placeholder="Insert Task"
          onChangeText={handleInputText}
          value={inputText}
        />
        <Button onPress={setTask} title="ADD" />
        <Button onPress={props.close} title="Cancel" />
      </View>
    </Modal>
  );
};

export default TaskInput;

const styles = StyleSheet.create({});
