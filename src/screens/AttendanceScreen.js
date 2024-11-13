// // src/screens/SettingsScreen.js
// import React, { useContext, useEffect, useState } from 'react';
// import { View, StyleSheet, ActivityIndicator, Alert, Text, FlatList, Dimensions } from 'react-native';
// import colors from '../styles/colors';
// import Header from '../common/Header';
// import { PreferencesContext } from '../context/PreferencesContext';

// const AttendanceScreen = ({ navigation }) => {
//   const { theme } = useContext(PreferencesContext);
//   return (
//     <View style={styles.container}>
//     <Header
//       leftIcon={require('../images/back.png')}
//        title="Attendance"
//       onClickLeftIcon={() => navigation.goBack()}
//     />

//     <View style={[styles.roundedContainer, { backgroundColor: theme.colors.background }]}>
//     <Text>Attendance Screen</Text>
//   </View>
//   </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.coloruse,
//   },
//   roundedContainer: {
//     flex: 1,
//     marginTop: 5,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     padding: 15,
//   },
// });

// export default AttendanceScreen;






import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { BarChart } from 'react-native-chart-kit';
import colors from '../styles/colors';
import Header from '../common/Header';
import { PreferencesContext } from '../context/PreferencesContext';

const { width } = Dimensions.get("window");

const AttendanceScreen = ({ navigation }) => {
  const { theme } = useContext(PreferencesContext);

  const [attendance, setAttendance] = useState({
    '2023-11-01': { marked: true, color: 'green' },
    '2023-11-02': { marked: true, color: 'red' },
    '2023-11-03': { marked: true, color: 'green' },
    '2023-11-04': { marked: true, color: 'green' },
    '2023-11-05': { marked: true, color: 'red' },
  });

  const presentDays = Object.values(attendance).filter(day => day.color === 'green').length;
  const absentDays = Object.values(attendance).filter(day => day.color === 'red').length;

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/back.png')}
        title="Attendance"
        onClickLeftIcon={() => navigation.goBack()}
      />

      <View style={[styles.roundedContainer, { backgroundColor: theme.colors.background }]}>
        <Text style={styles.title}>Attendance Calendar</Text>
        
        {/* Calendar Component */}
        <Calendar
          style={styles.calendar}
          markedDates={attendance}
          theme={{
            selectedDayBackgroundColor: colors.coloruse,
            todayTextColor: colors.coloruse,
            arrowColor: colors.coloruse,
          }}
        />

        {/* Attendance Summary Graph */}
        <Text style={styles.title}>Present/Absent Summary</Text>
        <ScrollView horizontal>
          <BarChart
            data={{
              labels: ["Present", "Absent"],
              datasets: [{ data: [presentDays, absentDays] }],
            }}
            width={width - 30}
            height={220}
            yAxisLabel=""
            chartConfig={{
              backgroundColor: theme.colors.background,
              backgroundGradientFrom: theme.colors.background,
              backgroundGradientTo: theme.colors.background,
              color: () => colors.coloruse,
              labelColor: () => colors.text,
              style: { borderRadius: 16 },
            }}
            style={styles.chart}
          />
        </ScrollView>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginVertical: 10,
    textAlign: 'center',
  },
  calendar: {
    marginBottom: 20,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default AttendanceScreen;
