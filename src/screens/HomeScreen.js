import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import CustomAppbar from '../components/CustomAppbar';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <CustomAppbar navigation={navigation} title="Home" subtitle="Subtitle" />
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        <Button mode="contained" onPress={() => navigation.navigate('Details')}>
          Go to Details
        </Button>
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
    marginBottom: 20,
    fontSize: 18,
  },
});

export default HomeScreen;


