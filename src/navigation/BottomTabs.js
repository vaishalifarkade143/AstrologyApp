
import React,{useEffect,useState}from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import AttendanceScreen from '../screens/AttendanceScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Keyboard } from 'react-native';
import NoticeScreen from '../screens/NoticeScreen';
import FeesScreen from '../screens/FeesScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { display: keyboardVisible ? 'none' : 'flex' },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Attendance') {
            iconName = 'cog-outline';
          } else if (route.name === 'Fees') {
            iconName = 'video-account';
          } else if (route.name === 'Notice') {
            iconName = 'chat-processing-outline';
          }
          return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Attendance" component={AttendanceScreen} />
      <Tab.Screen name="Fees" component={FeesScreen} />
      <Tab.Screen name="Notice" component={NoticeScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;