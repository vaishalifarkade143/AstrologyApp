// import React from 'react';
// import { View, Text } from 'react-native';
// import { Button } from 'react-native-paper';

// const DetailsScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button mode="contained" onPress={() => navigation.goBack()}>
//         Go Back
//       </Button>
//     </View>
//   );
// };

// export default DetailsScreen;





// src/screens/DetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import CustomAppbar from '../components/CustomAppbar';

const DetailsScreen = ({ navigation }) => {
  return (
    <>
      <CustomAppbar navigation={navigation} title="Details" subtitle="Subtitle" />
      <View style={styles.container}>
        <Text style={styles.text}>Details Screen</Text>
        <Button mode="contained" onPress={() => navigation.navigate('Home')}>
          Go to Home
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

export default DetailsScreen;
