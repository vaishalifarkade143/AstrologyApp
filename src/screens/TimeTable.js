

import React, { useContext, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { CalendarList } from 'react-native-calendars';
import colors from '../styles/colors';
import Header from '../common/Header';
import { PreferencesContext } from '../context/PreferencesContext';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get("window");

const TimeTable = ({ navigation }) => {
  const { theme } = useContext(PreferencesContext);
  const calendarRef = useRef(null); // Ref for CalendarList
  const [currentDate, setCurrentDate] = useState(moment()); // State to track current month and year

  const timeTableData = [
    { id: '1', title: 'January Fee', amount: '5000', date: '2023-01-15' },
    { id: '2', title: 'February Fee', amount: '5000', date: '2023-02-15' },
    { id: '3', title: 'March Fee', amount: '5000', date: '2023-03-15' },
    { id: '4', title: 'April Fee', amount: '5000', date: '2023-04-15' },
    { id: '5', title: 'May Fee', amount: '5000', date: '2023-05-15' },
    { id: '4', title: 'April Fee', amount: '5000', date: '2023-04-15' },
    { id: '5', title: 'May Fee', amount: '5000', date: '2023-05-15' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.feeItem}>
      <FontAwesome name="money" size={30} color={colors.coloruse} />
      <Text style={styles.rec}>Period No - vfvgf</Text>
    </View>
  );

  // Helper to update month and year
  const handleMonthChange = (direction) => {
    const newDate =
      direction === 'prev'
        ? moment(currentDate).subtract(1, 'month')
        : moment(currentDate).add(1, 'month');
    setCurrentDate(newDate);
    calendarRef.current?.scrollToMonth(newDate.format('YYYY-MM-DD'));
  };
  
 // Update header when calendar is scrolled
 const handleVisibleMonthsChange = (months) => {
  if (months && months.length > 0) {
    const visibleMonth = months[0].dateString; // Get the first visible month
    setCurrentDate(moment(visibleMonth));
  }
};

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        title="Time Table"
        leftIcon={require('../images/back.png')}
        onClickLeftIcon={() => navigation.goBack()}
      />

      {/* Content Section */}
      <View
        style={[
          styles.roundedContainer,
          { backgroundColor: theme.colors.background },
        ]}
      >
        {/* Calendar Header with ImageBackground */}
        <ImageBackground
          source={require('../images/paidfee.jpg')} // Replace with your header image path
          style={styles.calendarHeaderBackground}
        >
          <View style={styles.calendarHeader}>
            <TouchableOpacity onPress={() => handleMonthChange('prev')}>
              <Text style={styles.arrow}>{"<"}</Text>
            </TouchableOpacity>
            <Text style={styles.monthText}>{currentDate.format('MMMM YYYY')}</Text>
            <TouchableOpacity onPress={() => handleMonthChange('next')}>
              <Text style={styles.arrow}>{">"}</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* Horizontal Scrollable Calendar */}
        <View style={styles.calendarContainer}>
          <CalendarList
            ref={calendarRef}
            horizontal
            pagingEnabled
            renderHeader={() => null}
            onVisibleMonthsChange={handleVisibleMonthsChange} // Handle month updates 
            calendarWidth={Dimensions.get('window').width}
            onMonthChange={(date) => setCurrentDate(moment(date.dateString))}
            theme={{
              backgroundColor: theme.colors.background,
              calendarBackground: theme.colors.background,
              textSectionTitleColor: colors.coloruse,
              selectedDayBackgroundColor: colors.primary,
              selectedDayTextColor: colors.white,
              todayTextColor: colors.coloruse,
              dayTextColor: colors.black,
            }}
          />
        </View>
        <View style={styles.dividerView} />

        {/* FlatList Section */}
        <FlatList
          data={timeTableData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
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
    overflow: 'hidden',
  },
  calendarHeaderBackground: {
    width: '100%',
    height: Dimensions.get('window').height * 0.1, // Header height reduced to 10% of screen height
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 10,
  },
  arrow: {
    fontSize: 24,
    // fontWeight: 'bold',
    color: colors.coloruse,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
  calendarContainer: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },

  dividerView: {
    marginTop: -50,
    height: 0.75,
    backgroundColor: colors.placeholder,
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.93,
    marginBottom: 10
  },
  listContent: {
    // paddingBottom: 20,
    marginHorizontal: 15
  },
  feeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.coloruse,
    marginVertical: 7,
  },
  rec: {
    fontSize: 14,
    color: "#000000",
    fontFamily: 'Roboto',
    marginTop: 2,
    marginLeft: 10
  },

});

export default TimeTable;
