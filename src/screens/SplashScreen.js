

import{useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Login');
          // setIsLoading(false);
        }, 3000); // 3 seconds for the splash screen
    
        return () => clearTimeout(timer); // Clean up the timer when component unmounts
      }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/era.png')} // replace with your image path
        style={styles.logo}
        resizeMode="contain" // Makes the image fit within the container
      />
      {/* <Text style={styles.text}>SplashScreen</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',       // Center horizontally
    backgroundColor: '#fff',    // Background color of splash screen
  },
  logo: {
    width: 150,                 // Width of the logo
    height: 150,                // Height of the logo
    marginBottom: 20,           // Space between logo and text
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});

export default SplashScreen;