import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated, Dimensions,StatusBar  } from 'react-native';
import React, { useState, useContext, useRef } from 'react';
import Header from '../common/Header';
import colors from '../styles/colors';
import Modal from "react-native-modal";
import FrameComponent from '../components/FrameComponent';
import ProfileComponent from '../components/ProfilComponent';
import ModalComponent from '../components/ModalComponent';

import { PreferencesContext } from '../context/PreferencesContext';

const { width } = Dimensions.get("window");
const HomeScreen = ({ navigation }) => {
  const { theme } = useContext(PreferencesContext);
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('option1');
  const [buttonWidth, setButtonWidth] = useState(width / 4);
  const translateX = useRef(new Animated.Value(0)).current;
  const handleSignOut = () => {
    console.log('Signing out...');
    navigation.navigate('Login');
  };
  const handleButtonPress = (option, index) => {
    setSelectedOption(option);
    Animated.spring(translateX, {
      toValue: index * buttonWidth,
      useNativeDriver: true,
    }).start();
  };
  const renderContent = () => {
    switch (selectedOption) {
      case 'option1':
        return <Text>Content for Option 1</Text>;
      case 'option2':
        return <Text>Content for Option 2</Text>;
      case 'option3':
        return <Text>Content for Option 3</Text>;
      case 'option4':
        return <Text>Content for Option 4</Text>;
      case 'option5':
        return <Text>Content for Option 5</Text>;
      default:
        return null;
    }
  };
  return (
    <View style={[styles.container,
    { backgroundColor: colors.coloruse }]}>
            <StatusBar  backgroundColor={colors.coloruse} barStyle="light-content" />
      <Header
        leftIcon={require('../images/era.png')}
        rightIcon={require('../images/logout.png')}
        onClickLeftIcon={() => console.log('ERA logo clicked')}
        onClickRightIcon={handleSignOut}
      />
      <View style={[styles.roundedContainer,
      { backgroundColor: theme.colors.background }]}>
        <ProfileComponent />
        <FrameComponent />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContentContainer}
          onLayout={(event) => setButtonWidth(event.nativeEvent.layout.width / 4)}
        >
          {['option1', 'option2', 'option3', 'option4', 'option5'].map((option, index) => (
            <TouchableOpacity
              key={option}
              style={[styles.button, selectedOption === option && styles.selectedButton]}
              onPress={() => handleButtonPress(option, index)}
            >
              <Text style={selectedOption === option ? styles.selectedText : styles.buttonText}>
                {`Option ${index + 1}`}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Animated.View
          style={[
            styles.divider,
            {
              width: buttonWidth,
              transform: [{ translateX }],
            },
          ]}
        />
        <View style={styles.contentContainer}>
          <Text> 
            {renderContent()}
            </Text>
         </View>
        <TouchableOpacity style={styles.addButton} onPress={() => setVisible(true)}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
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
  scrollContentContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    height: 55,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  selectedButton: {
    backgroundColor: colors.backgroundlight,
  },
  buttonText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 13,
    color: '#000',
    textAlign: 'center'
  },
  selectedText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 13,
    color: colors.coloruse,
    fontWeight: 'bold',
  },
  divider: {
    height: 3,
    backgroundColor: colors.backgroundlight,
    position: 'absolute',
    bottom: 0,
  },
  contentContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;
