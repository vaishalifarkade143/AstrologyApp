import React, { useState, useContext, useRef } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated, Dimensions, StatusBar
} from 'react-native';
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
  const buttonWidth = width / 5;
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
    <View style={[styles.container, { backgroundColor: colors.coloruse }]}>
      <StatusBar backgroundColor={colors.coloruse} barStyle="light-content" />
      <Header
        title="Era International School, Besa"
        rightIcon={require('../images/logout.png')}
        onClickRightIcon={handleSignOut}
      />
      
      <View style={[styles.roundedContainer, { backgroundColor: theme.colors.background }]}>
        <ProfileComponent />
        <FrameComponent />

        {/* Option Buttons */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContentContainer}
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

        {/* Divider Animation */}
        <Animated.View
          style={[
            styles.divider,
            {
              width: buttonWidth,
              transform: [{ translateX }],
            },
          ]}
        />

        {/* Content Area */}
        <View style={styles.contentContainer}>
          {renderContent()}
        </View>

        {/* Add Button */}
        <TouchableOpacity style={styles.addButton} onPress={() => setVisible(true)}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

        {/* Modal */}
        <Modal
          isVisible={visible}
          onBackButtonPress={() => setVisible(false)}
          onBackdropPress={() => setVisible(false)}
          onSwipeComplete={() => setVisible(false)}
          swipeDirection="down"
          style={styles.modal}
        >
          <ModalComponent />
        </Modal>
      </View>

      {/* Company Label */}
      <View style={{ backgroundColor: colors.coloruse }}>
        <Text style={styles.companyLabel}>Educron</Text>
      </View>
    </View>
  );
};

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
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.coloruse,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addButtonText: {
    fontSize: 30,
    color: '#fff',
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  companyLabel: {
    textAlign: 'center',
    color: colors.background,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 12,
    paddingTop: 3,
    paddingBottom: 3,
  },
  scrollContentContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    width: width / 5,
    height: 55,
    paddingVertical: 15,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: colors.backgroundlight,
  },
  buttonText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 13,
    color: '#000',
    textAlign: 'center',
  },
  selectedText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 13,
    color: colors.coloruse,
  },
  divider: {
    height: 3,
    backgroundColor: colors.backgroundlight,
    position: 'absolute',
    bottom: 0,
  },
  contentContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
