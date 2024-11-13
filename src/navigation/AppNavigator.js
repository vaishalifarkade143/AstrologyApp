

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import FrameComponent from '../components/FrameComponent';
import ProfileScreen from '../screens/ProfileScreen';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import ParentProfile from '../screens/ParentProfile';
import AttendanceScreen from '../screens/AttendanceScreen';
import TimeTable from '../screens/TimeTable';
import LeaveApplication from '../screens/LeaveApplication';
import StudentActivity from '../screens/StudentActivity';
import Ecampus from '../screens/Ecampus';
import Fee from '../screens/FeesScreen';
import PaidFee from '../screens/PaidFee';
import PayNow from '../screens/PayNow';

const Stack = createStackNavigator();
const AppNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: () => <Text>Home</Text> }} />
    <Stack.Screen name="FrameComponent" component={FrameComponent} options={{ headerTitle: () => <Text>Frame</Text> }} />
    <Stack.Screen name="Fee" component={Fee} options={{ headerTitle: () => <Text>Fee</Text> }} />
    <Stack.Screen name="Paidfee" component={PaidFee} options={{ headerTitle: () => <Text>Paidfee</Text> }} />
    <Stack.Screen name="Paynow" component={PayNow} options={{ headerTitle: () => <Text>PayNow</Text> }} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerTitle: () => <Text>Profile</Text> }} />
    <Stack.Screen name="Parentprofile" component={ParentProfile} options={{ headerTitle: () => <Text>Parent</Text> }} />
    <Stack.Screen name="Attendance" component={AttendanceScreen} options={{ headerTitle: () => <Text>Attendance</Text> }} />
    <Stack.Screen name="Timetable" component={TimeTable} options={{ headerTitle: () => <Text>TimeTable</Text> }} />
    <Stack.Screen name="Leaveapplication" component={LeaveApplication} options={{ headerTitle: () => <Text>LeaveApplication</Text> }} />
    <Stack.Screen name="Studentactivity" component={StudentActivity} options={{ headerTitle: () => <Text>StudentActivity</Text> }} />
    <Stack.Screen name="Ecampus" component={Ecampus} options={{ headerTitle: () => <Text>Ecampus</Text> }} />
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: () => <Text>Login</Text> }} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerTitle: () => <Text>ForgotPassword</Text> }} />
  </Stack.Navigator>
);
export default AppNavigator;