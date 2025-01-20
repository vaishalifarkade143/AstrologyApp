import React, { useContext, useRef, useState } from 'react';
import {
  View, StyleSheet, TouchableOpacity,
  ImageBackground, Text, Dimensions
} from 'react-native';
import colors from '../styles/colors';
import Header from '../common/Header';
import { PreferencesContext } from '../context/PreferencesContext';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Ecampus = ({ navigation }) => {
  const { theme } = useContext(PreferencesContext);
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/back.png')}
        title="Ecampus"
        onClickLeftIcon={() => navigation.goBack()}
      />

      <View style={[styles.roundedContainer, { backgroundColor: theme.colors.background }]}>
        {/* Calendar Header with Image */}

        <ImageBackground
          source={require('../images/paidfee.jpg')}
          style={styles.calendarHeaderBackground}
        >
        </ImageBackground>

        <TouchableOpacity onPress={() =>{
        navigation.navigate('Ecampuscircular');
          console.log("ecampus circular")
        }
        }>
          <View style={styles.Ecampus}>
            <Text style={styles.EcampusText}>Ecampus Circular</Text>
            <AntDesign
              name="right"
              size={18}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>{
           navigation.navigate('Ecampusmessage');
          console.log("ecampus Message")
        }
        }>
          <View style={styles.Ecampus}>
            <Text style={styles.EcampusText}>Ecampus Message</Text>
            <AntDesign
              name="right"
              size={18}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.coloruse,
  },
  roundedContainer: {
    flex: 1,
    marginTop: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden', // Ensures children respect the border radius
  },
  calendarHeaderBackground: {
    width: "105%", // Adjust width to cover the screen fully
    height: Dimensions.get('window').height * 0.3, // 30% of screen height
    justifyContent: 'center',
    borderTopLeftRadius: 20, // Add top-left radius
    borderTopRightRadius: 20, // Add top-right radius
    overflow: 'hidden', // Ensure image respects border radius
    marginTop: -12,
    marginBottom: 10
  },
  Ecampus: {
    flexDirection: "row",
    justifyContent: "space-between", // Distribute text and arrow to the edges
    alignItems: "center", // Align items vertically in the center
    padding: 8,
    borderRadius: 10,
    borderColor: colors.coloruse,
    borderWidth: 1,
    marginTop: 5,
    margin: 12,
    backgroundColor:colors.backgroundlight,
  },
  EcampusText: {
    fontSize: 17,
  },
  icon: {
    color: colors.coloruse
  }
});

export default Ecampus