// src/screens/SettingsScreen.js
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomAppbar from '../components/CustomAppbar';

const SettingsScreen = ({ navigation }) => {
  return (
    <>
      <CustomAppbar navigation={navigation} title="Setting" subtitle="Subtitle" />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings Screen</Text>
  </View>
  </>
  );
};


export default SettingsScreen;
