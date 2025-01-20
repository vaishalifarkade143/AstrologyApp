
import React, { useContext, useState, useRef } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import PieChart from 'react-native-pie-chart';
import colors from '../styles/colors';
import Header from '../common/Header';
import { PreferencesContext } from '../context/PreferencesContext';
import moment from 'moment';

const { width } = Dimensions.get("window");

const AttendanceScreen = ({ navigation }) => {
  const { theme } = useContext(PreferencesContext);
  const calendarRef = useRef(null);
  const [currentDate, setCurrentDate] = useState(moment());

  const [attendance] = useState({
    '2023-11-01': { marked: true, color: 'green' },
    '2023-11-02': { marked: true, color: 'red' },
    '2023-11-03': { marked: true, color: 'green' },
    '2023-11-04': { marked: true, color: 'green' },
    '2023-11-05': { marked: true, color: 'red' },
  });

  const presentDays = Object.values(attendance).filter(day => day.color === 'green').length;
  const absentDays = Object.values(attendance).filter(day => day.color === 'red').length;

  // Handle visible month change
  const handleVisibleMonthsChange = (months) => {
    if (months && months.length > 0) {
      const visibleMonth = months[0].dateString;
      // Only update if the month is different
      if (!moment(visibleMonth).isSame(currentDate, 'month')) {
        setCurrentDate(moment(visibleMonth));
        calendarRef.current?.scrollToMonth(moment(visibleMonth).format('YYYY-MM-DD'));
      }
    }
  };

  // Navigate to previous or next month
  const handleMonthChange = (direction) => {
    const newDate =
      direction === 'prev'
        ? moment(currentDate).subtract(1, 'month')
        : moment(currentDate).add(1, 'month');
    setCurrentDate(newDate);
    calendarRef.current?.scrollToMonth(newDate.format('YYYY-MM-DD'));
  };

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/back.png')}
        title="Attendance"
        onClickLeftIcon={() => navigation.goBack()}
      />

      <View style={[styles.roundedContainer, { backgroundColor: theme.colors.background }]}>
        {/* Calendar Header */}
        <ImageBackground
          source={require('../images/paidfee.jpg')}
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

        {/* Calendar List */}
        <View style={styles.calendarContainer}>
          <CalendarList
            ref={calendarRef}
            horizontal
            pagingEnabled
            scrollEnabled={true}
            renderHeader={() => null}
            calendarWidth={Dimensions.get('window').width}
            onVisibleMonthsChange={handleVisibleMonthsChange}
            markedDates={attendance}
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

        {/* Divider */}
        <View style={styles.dividerView} />

        {/* Legend */}
        <View style={styles.legendContainer}>
          <View style={[styles.legendItem, { backgroundColor: colors.coloruse }]} />
          <Text style={styles.legendText}>Present</Text>
          <View style={[styles.legendItem, { backgroundColor: colors.red }]} />
          <Text style={styles.legendText}>Absent</Text>
          <View style={[styles.legendItem, { backgroundColor: colors.holiday }]} />
          <Text style={styles.legendText}>Holiday</Text>
        </View>

        {/* Pie Chart */}
        <View style={styles.pieChartContainer}>
          <PieChart
            widthAndHeight={170}
            series={[presentDays, absentDays]}
            sliceColor={[colors.coloruse, colors.red]}
            coverRadius={0.6}
            coverFill={theme.colors.background}
          />
          <View style={styles.pieChartDetails}>
            <View style={styles.detailRow}>
              <View style={[styles.legendCircle, { backgroundColor: colors.coloruse }]} />
              <View>
                <Text style={styles.detailText}>Present: {presentDays}</Text>
                <Text style={styles.percentageText}>
                  {((presentDays / (presentDays + absentDays)) * 100).toFixed(2)}%
                </Text>
              </View>
            </View>
            <View style={styles.detailRow}>
              <View style={[styles.legendCircle, { backgroundColor: colors.red }]} />
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
    padding: 15,
  },
  calendarHeaderBackground: {
    marginTop: -13,
    width: '100%',
    height: Dimensions.get('window').height * 0.1,
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
  calendarContainer: {
    width: Dimensions.get('window').width, // Match width
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    marginLeft:-15,
    marginRight:10,
    padding: 0,
    overflow: 'hidden',
  },
  monthText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  arrow: {
    fontSize: 24,
    color: colors.coloruse,
  },
  legendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1.2,
    borderRadius: 10,
    borderColor: colors.coloruse,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 15,
    backgroundColor: colors.backgroundlight,
   },
  legendItem: {
    width: 12,
    height: 12,
    marginHorizontal: 12,
    borderRadius: 6,
  },
  legendText: {
    fontSize: 16,
    color: colors.text,
    marginRight:15
  },
  dividerView: {
    marginTop: -50,
    height: 1,
    backgroundColor: colors.placeholder,
    alignSelf: 'center',
    marginBottom: 15,
    width: Dimensions.get('window').width * 0.93,
  },
  pieChartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1.2,
    borderRadius: 10,
    borderColor: colors.coloruse,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: colors.backgroundlight,
  },
  pieChartDetails: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginRight: 30,
  },
  legendCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  detailText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  percentageText: {
    fontSize: 14,
    color: colors.placeholder,
    marginTop: 2,
  },
});

export default AttendanceScreen;
