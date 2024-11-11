

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import FrameComponent from '../components/FrameComponent';
import ProfileScreen from '../screens/ProfileScreen';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import ParentProfile from '../screens/ParentProfile';

const Stack = createStackNavigator();
const AppNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: () => <Text>Home</Text> }} />
    <Stack.Screen name="FrameComponent" component={FrameComponent} options={{ headerTitle: () => <Text>Frame</Text> }} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerTitle: () => <Text>Profile</Text> }} />
    <Stack.Screen name="Parentprofile" component={ParentProfile} options={{ headerTitle: () => <Text>Parent</Text> }} />
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: () => <Text>Login</Text> }} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerTitle: () => <Text>ForgotPassword</Text> }} />
  </Stack.Navigator>
);
export default AppNavigator;