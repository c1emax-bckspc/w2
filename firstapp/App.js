import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  Dimensions,
} from "react-native";
export default function App() {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleInputText = (text) => {
    setInputText(text);
  };
  const setTask = () => {
    setTaskList((currenttaskList) => [...currenttaskList, inputText]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.TitleText}>ToDo</Text>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <TextInput
          style={{ borderWidth: 1, borderStyle: "solid", width: 200 }}
          placeholder="Insert Task"
          onChangeText={handleInputText}
        />
        <Button onPress={setTask} title="Click" />
      </View>
      <View style={styles.taskListStyle}>
        <Text>Task List</Text>
        <View>
          {taskList.map((task) => (
            <Text key={task}>{task}</Text>
          ))}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  taskListStyle: {
    padding: 10,
    width: Dimensions.get("window").width,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
    marginTop: 50,
    gap: 10,
  },
  TitleText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
