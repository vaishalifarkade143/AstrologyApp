
import React, { useState, useContext, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
  StatusBar,
  FlatList,
} from 'react-native';
import Header from '../common/Header';
import colors from '../styles/colors';
import Modal from 'react-native-modal';
import FrameComponent from '../components/FrameComponent';
import ProfileComponent from '../components/ProfilComponent';
import ModalComponent from '../components/ModalComponent';
import { PreferencesContext } from '../context/PreferencesContext';
import PieChart from 'react-native-pie-chart';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const { theme } = useContext(PreferencesContext);
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Events');
  const buttonWidth = width / 5;
  const translateX = useRef(new Animated.Value(0)).current;

  // Dummy data for Homework and Classwork
  const homeworkData = [
    { id: '1', title: 'Math Assignment' },
    { id: '2', title: 'Science Project' },
    { id: '3', title: 'History Essay' },
    { id: '4', title: 'Math Assignment' },
    { id: '5', title: 'Science Project' },
  ];

  const classworkData = [
    { id: '1', title: 'Math Classwork' },
    { id: '2', title: 'English Notes' },
    { id: '3', title: 'Physics Exercises' },
    { id: '4', title: 'Math Assignment' },
    { id: '5', title: 'Science Project' },
  ];

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

  // Render content based on the selected option
  const renderContent = () => {
    switch (selectedOption) {
      case 'Events':
        return
      case 'Attendance': {
        const attendance = {
          '2023-11-01': { marked: true, color: 'green' },
          '2023-11-02': { marked: true, color: 'red' },
          '2023-11-03': { marked: true, color: 'green' },
          '2023-11-04': { marked: true, color: 'green' },
          '2023-11-05': { marked: true, color: 'red' },
        };
        const presentDays = Object.values(attendance).filter((day) => day.color === 'green').length;
        const absentDays = Object.values(attendance).filter((day) => day.color === 'red').length;

        return (
          <View style={styles.pieChartContainer}>
            <Text style={styles.detailText}>Attendance</Text>
            <View style={styles.pieChartContainerView}>
              <PieChart
                widthAndHeight={170}
                series={[presentDays, absentDays]}
                sliceColor={[colors.coloruse, colors.red]}
                coverRadius={0.6}
                coverFill={theme.colors.background}
              />
              <View style={styles.pieChartDetails}>
                <View style={styles.detailRow}>
                  <View
                    style={[styles.legendCircle, { backgroundColor: colors.coloruse }]}
                  />
                  <View>
                    <Text style={styles.detailText}>Present: {presentDays}</Text>
                    <Text style={styles.percentageText}>
                      {((presentDays / (presentDays + absentDays)) * 100).toFixed(2)}%
                    </Text>
                  </View>
                </View>
                <View style={styles.detailRow}>
                  <View
                    style={[styles.legendCircle, { backgroundColor: colors.red }]}
                  />
                  <View>
                    <Text style={styles.detailText}>Absent: {absentDays}</Text>
                    <Text style={styles.percentageText}>
                      {((absentDays / (presentDays + absentDays)) * 100).toFixed(2)}%
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        );
      }
      case 'Classwork':
        return (
          <View style={styles.listContainer}>
          <FlatList
            data={classworkData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
              </View>
            )}
            nestedScrollEnabled
          />
        </View>
        );
      case 'Homework':
        return (
          <View style={styles.listContainer}>
          <FlatList
            data={homeworkData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
              </View>
            )}
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
            // contentContainerStyle={styles.listContent}
          />
          </View>
        );
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
          {['Events', 'Attendance', 'Classwork', 'Homework'].map((option, index) => (
            <TouchableOpacity
              key={option}
              style={[styles.button, selectedOption === option && styles.selectedButton]}
              onPress={() => handleButtonPress(option, index)}
            >
              <Text
                style={selectedOption === option ? styles.selectedText : styles.buttonText}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Divider Animation */}
        {/* <Animated.View
          style={[
            styles.divider,
            {
              width: buttonWidth,
              transform: [{ translateX }],
            },
          ]}
        /> */}

        <View style={[styles.dividerView, { width: Dimensions.get('window').width * 0.916, }]} />
        {/* Content Area */}
        <View style={styles.contentContainer}>{renderContent()}</View>

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
      <View style={{ backgroundColor: colors.coloruse, }}>
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
    zIndex: 10,
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
    fontWeight: 'bold',
    fontSize: 12,
    paddingVertical: 3,
  },
  scrollContentContainer: {
    flexDirection: 'row',
    marginTop: 9,
    gap: 10,
  },
  button: {
    width: width / 4,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedButton: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.backgroundlight,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#000',
    textAlign: 'center',
  },
  selectedText: {
    fontWeight: 'bold',
    fontSize: 13,
    color: colors.coloruse,
  },
  divider: {
    height: 3,
    // width:300,
    backgroundColor: colors.backgroundlight,
    top: -130,
  },
  contentContainer: {
    flex: 1,
    // marginBottom: 50,
    top: -110,
  },
  pieChartContainerView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  itemContainer: {
    padding: 15,
    backgroundColor: colors.backgroundlight,
    marginBottom: 10,
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pieChartContainer: {
    borderWidth: 1.2,
    borderRadius: 10,
    borderColor: colors.coloruse,
    paddingVertical: 15,
    backgroundColor: colors.backgroundlight,
    marginTop: -10, // Adjust this to reduce space
  },
  pieChartDetails: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  detailText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    alignSelf: "center",
    paddingTop: -15,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center",
    marginBottom: 15,
    // marginRight: 30,
  },
  dividerView: {
    height: 3,
    backgroundColor: colors.backgroundlight,
    top: -137,
    // marginRight:-30
  },
  listContainer: {
    flex: 1, // Ensures FlatList expands to fill the remaining space
    marginBottom: -100, // Prevents overlapping with the floating Add button
  },
});

export default HomeScreen;
