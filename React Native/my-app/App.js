//To-Do App
import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, Checkbox, Snackbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // Import SafeAreaProvider
import styles from './styles'; 

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [doneCount, setDoneCount] = useState(0); // Counter for done tasks
  const [errorMessage, setErrorMessage] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const addTask = () => {
    if (task.length <= 3) {
      setErrorMessage('Invalid task, must be more than 3 characters.');
      return;
    }
    setTasks([...tasks, { id: Math.random().toString(), name: task, done: false }]);
    setTask('');
    setSnackbarVisible(true);
  };

  const toggleDone = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        const updatedTask = { ...task, done: !task.done };
        setDoneCount(doneCount + (updatedTask.done ? 1 : -1));
        return updatedTask;
      }
      return task;
    }));
  };

  const deleteTask = (id) => {
    const taskToDelete = tasks.find(task => task.id === id);
    if (taskToDelete?.done) setDoneCount(doneCount - 1);
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <TextInput
          label="Add Task"
          value={task}
          onChangeText={setTask}
          mode="outlined"
          style={styles.input}
        />
        <Button mode="contained" onPress={addTask} style={styles.addButton}>
          Add Task
        </Button>

        <Text style={styles.counter}>Tasks Done: {doneCount}/{tasks.length}</Text>

        {tasks.map((task) => (
          <View key={task.id} style={styles.taskContainer}>
            <Text style={task.done ? styles.taskDone : null}>{task.name}</Text>
            <View style={styles.checkboxContainer}>
              <Checkbox
                status={task.done ? 'checked' : 'unchecked'}
                onPress={() => toggleDone(task.id)}
              />
              {/* <Text>Done</Text> */}
            </View>
            <Button onPress={() => deleteTask(task.id)}>Delete</Button>
          </View>
        ))}

        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          duration={2000}
        >
          Task added successfully!
        </Snackbar>
      </View>
    </SafeAreaProvider>
  );
};

export default App;
