import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';  

function HomeScreen() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const navigation = useNavigation();  

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTaskItems([...taskItems, task]);
      setTask('');
    } else {
      alert('Please enter a task!');
    }
  };

  const handleDeleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.taskInput}
        placeholder="Add new study task"
        value={task}
        onChangeText={text => setTask(text)}
      />
      <Button
        title="Add Task"
        onPress={handleAddTask}
      />
      <Button
        title="Go to Notes"
        onPress={() => navigation.navigate('Notes')}
      />
      <Button
        title="Open Camera"
        onPress={() => navigation.navigate('Camera')}
      />
      <FlatList
        data={taskItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskItemContainer}>
            <Text style={styles.taskItem}>{item}</Text>
            <TouchableOpacity onPress={() => handleDeleteTask(index)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 50,
  },
  taskInput: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
  },
  taskItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    backgroundColor: '#eee',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  taskItem: {
    flex: 1, 
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
  },
});

export default HomeScreen;
