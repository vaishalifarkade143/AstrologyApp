
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useContext } from 'react';
import { SegmentedButtons, useTheme } from 'react-native-paper';
import Header from '../common/Header';
import colors from '../styles/colors';
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/FontAwesome';
import FrameComponent from '../components/FrameComponent';
import ProfileComponent from '../components/ProfilComponent';
import ModalComponent from '../components/ModalComponent';

import { PreferencesContext } from '../context/PreferencesContext';


const HomeScreen = ({ navigation }) => {
  const { theme } = useContext(PreferencesContext);
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleSignOut = () => {
    console.log('Signing out...');
    navigation.navigate('Login');
  };

  return (
    <View style={[styles.container,
    { backgroundColor: colors.coloruse }]}>
      {/* Header */}
      <Header
        leftIcon={require('../images/era.png')}
        rightIcon={require('../images/logout.png')}
        onClickLeftIcon={() => console.log('ERA logo clicked')}
        onClickRightIcon={handleSignOut}
      />

      <View style={[styles.roundedContainer,
      { backgroundColor: theme.colors.background }]}>
        {/* Main content can go here */}
        <ProfileComponent />
        <FrameComponent />
        {/* Segmented Button */}

        <SegmentedButtons
          value={selectedOption}
          onValueChange={setSelectedOption}
          buttons={[
            {
              value: 'option1',
              label: 'Option 1',
              style: selectedOption === 'option1' ? styles.selectedButton : styles.button,
            },
            {
              value: 'option2',
              label: 'Option 2',
              style: selectedOption === 'option2' ? styles.selectedButton : styles.button,
            },
            {
              value: 'option3',
              label: 'Option 3',
              style: selectedOption === 'option3' ? styles.selectedButton : styles.button,
            },
          ]}
          style={styles.segmentedButtons}
        />
        <View style={styles.dividerView}></View>

        {/* Floating Action Button */}
        <TouchableOpacity style={styles.addButton} onPress={() => setVisible(true)}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

        {/* Modal Component */}
        <Modal
          isVisible={visible}
          onBackButtonPress={() => setVisible(false)} // Dismiss modal on back button press
          onBackdropPress={() => setVisible(false)} // Dismiss modal on backdrop press
          onSwipeComplete={() => setVisible(false)} // Dismiss modal on swipe down
          swipeDirection="down" // Enables swipe down to dismiss
          style={styles.modal} // Use this style to position modal
        >
          <ModalComponent />
        </Modal>
      </View>
      <View style={{ backgroundColor: colors.coloruse }}>
        <Text style={styles.companyLabel}>Educron</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roundedContainer: {
    flex: 1,
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    elevation: 5,
  },
  addButton: {
    position: 'absolute', // Absolute positioning
    bottom: 20, // Distance from the bottom
    right: 20, // Distance from the right
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.coloruse,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Add shadow for better visibility
  },
  addButtonText: {
    fontSize: 30,
    color: '#fff',
  },
  modal: {
    margin: 0, // Remove default margins
    justifyContent: 'flex-end', // Position modal at the bottom
  },
  companyLabel: {
    textAlign: 'center',
    color: colors.background,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 12,
    paddingTop: 3,
    paddingBottom: 3
  },
  segmentedButtons: {
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderColor: 'none',
    borderWidth: 0,
  },
  button: {
    padding: 5,
    borderRadius: 8,
    borderWidth: 0,
  },
  selectedButton: {
    padding: 5,
    borderRadius: 8,
    borderWidth: 0,
    backgroundColor: colors.backgroundlight, // Color for selected button
    color: 'white', // Text color for selected button
  },
  dividerView: {
    marginTop: -15,
    height: 3,
    backgroundColor: colors.backgroundlight,
    alignSelf: 'center',
    marginBottom: 10,
    width: 360,

  },
});

export default HomeScreen;
