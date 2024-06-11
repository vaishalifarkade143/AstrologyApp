
// src/screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomAppbar from '../components/CustomAppbar';

const ProfileScreen = ({ navigation }) => {
  return (
    <>
      <CustomAppbar navigation={navigation} title="Profile" subtitle="Subtitle" />
      <View style={styles.container}>
        <Text style={styles.text}>Profile Screen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default ProfileScreen;

