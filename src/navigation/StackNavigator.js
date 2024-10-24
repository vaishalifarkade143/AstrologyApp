import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
         <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
    </Stack.Navigator>
  );
};
export default StackNavigator;


