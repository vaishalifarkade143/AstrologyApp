import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient
import colors from '../styles/colors';

const GradientComponent = () => (
  <LinearGradient
    colors={colors.coloruse} // Use the gradient color array
    start={{ x: 0.0, y: 0.0 }} // Starting point of the gradient
    end={{ x: 1.0, y: 1.0 }}   // Ending point of the gradient
    style={styles.gradientBackground}
  >
    <Text style={styles.text}>Gradient Background Example</Text>
  </LinearGradient>
);

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.background,
    fontSize: 18,
  },
});

export default GradientComponent;

