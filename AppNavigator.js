import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, NotesScreen, CameraScreen } from './components';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Study Planner' }} />
      <Stack.Screen name="Notes" component={NotesScreen} options={{ title: 'Notes' }} />
      <Stack.Screen name="Camera" component={CameraScreen} options={{ title: 'Camera' }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
