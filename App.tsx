import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Todos from './src/screens/Todos';
import TodoDetails from './src/screens/TodoDetails';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Todos} />
        <Stack.Screen name="Details" component={TodoDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
