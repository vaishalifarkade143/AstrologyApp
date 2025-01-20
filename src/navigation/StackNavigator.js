
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';  // Import Text component
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FrameComponent from '../components/FrameComponent';
import ParentProfile from '../screens/ParentProfile';
import AttendanceScreen from '../screens/AttendanceScreen';
import TimeTable from '../screens/TimeTable';
import LeaveApplication from '../screens/LeaveApplication';
import StudentActivity from '../screens/StudentActivity';
import Ecampus from '../screens/Ecampus';
import Fee from '../screens/FeesScreen';
import PaidFee from '../screens/PaidFee';
import PayNow from '../screens/PayNow';
import EcampusCircular from '../screens/EcampusCircular';
import EcampusMessage from '../screens/EcampusMessage';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        title: "null"
      }}  >
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerTitle: () => <Text>Splash</Text> }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: () => <Text>Login</Text> }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerTitle: () => <Text>ForgotPassword</Text> }} />
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
    <Stack.Screen name="Ecampuscircular" component={EcampusCircular} options={{ headerTitle: () => <Text>Ecampus</Text> }} />
    <Stack.Screen name="Ecampusmessage" component={EcampusMessage} options={{ headerTitle: () => <Text>Ecampus</Text> }} />
    </Stack.Navigator>
  );
};
export default StackNavigator;

