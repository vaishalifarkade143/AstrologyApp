// src/screens/HomeScreen.js
// import * as React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Button } from 'react-native-paper';

// const HomeScreen = ({navigation}) => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Home Screen</Text>
//     <Button mode="contained" onPress={() => navigation.navigate('Details')}>
//       Go to Details
//     </Button>
//   </View>
//   );
// };
// export default HomeScreen;



import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <>
 <Appbar.Header>
       <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
    </Appbar.Header>

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

