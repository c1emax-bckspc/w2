import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [taskList, setTaskList] = useState([]);

  const addTaskList = (inputText) => {
    setTaskList((currenttaskList) => [
      ...currenttaskList,
      { taskName: inputText, id: Math.random() },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.TitleText}>ToDo</Text>
      <TaskInput add={addTaskList} />
      <View style={styles.taskListStyle}>
        <Text style={{ fontSize: 30 }}>Task List</Text>
        <FlatList
          data={taskList}
          renderItem={(task) => {
            return <TaskItem text={task.item.taskName} />;
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
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
