import 'intl-pluralrules';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from './src/ux/screens/LoginScreen';
import ListScreen from './src/ux/screens/ListScreen';
import { ThemeProvider } from './src/ux/context/ThemeContext';
import DetailScreen from './src/ux/screens/DetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="List" component={ListScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    </ThemeProvider>
  );
}
