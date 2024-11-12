


import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Surface, IconButton, } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';
import spacing from '../styles/spacing';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons
const FrameComponent = () => {
  const navigation = useNavigation();
  // console.log("nkhidfsadch", navigation);
  return (
    <Surface style={styles.container}>
      <View style={styles.iconContainer}>
        {/* Fee Icon */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <FontAwesome name="money" size={22} color="#fff" />}
            style={styles.iconBackground}
            onPress={() =>{
              console.log("Home pressed")
              navigation.navigate('Fee')
                        }}
          />
          <Text style={styles.iconLabel}>Fee</Text>
        </View>

        {/* Notifications Icon */}

        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <Ionicons name="person-circle-outline" size={28} color="#fff" />}
            style={styles.iconBackground}
            onPress={() => {
              console.log("Navigating to ProfileScreen");
              navigation.navigate('ProfileScreen')
            }}
          // onPress={() => navigation?.navigate('ProfileScreen')}
          />
          <Text style={styles.iconLabel}>Student Profile</Text>
        </View>


        {/* Parent Profile */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <Ionicons name="people-sharp" size={24} color="#fff" />}
            style={styles.iconBackground}
            onPress={() => {
              console.log("Navigating to parentProfile");
              navigation.navigate('Parentprofile')
            }}
          />
          <Text style={styles.iconLabel}>Parent Profile</Text>
        </View>

        {/* Attendance Icon */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <FontAwesome name="check-square" size={24} color="#fff" />}
            style={styles.iconBackground}
            onPress={() => {console.log("Attendance pressed");
              navigation.navigate('Attendance')
            }}
          />
          <Text style={styles.iconLabel}>Attendance</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        {/* Time Table */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <MaterialIcons name="watch-later" size={24} color="#fff" />}
            style={styles.iconBackground}
            onPress={() =>{console.log("Time Table");
              navigation.navigate('Timetable')
            }}
          />
          <Text style={styles.iconLabel}>Time Table</Text>
        </View>

        {/* Leave Application */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <MaterialCommunityIcons name="email-newsletter" size={24} color="#fff" />}
            style={styles.iconBackground}
            onPress={() => {console.log("Leave Application");
              navigation.navigate('Leaveapplication')
            }}
         
          />
          <Text style={styles.iconLabel1}>Student leave</Text>
          <Text style={styles.iconLabel}> Application</Text>
        </View>

        {/* Student Activity */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <FontAwesome name="bell" size={24} color="#fff" />}
            style={styles.iconBackground}
            onPress={() => {console.log("Student Activity");
              navigation.navigate('Studentactivity')
            }}
          />
          <Text style={styles.iconLabel}>Student Activity</Text>
        </View>


        {/* Ecampus Icon */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <Entypo name="newsletter" size={24} color="#fff" />}
            style={styles.iconBackground}
            onPress={() => {console.log("Ecampus pressed");
              navigation.navigate('Ecampus')
            }}
          />
          <Text style={styles.iconLabel}>Ecampus</Text>
        </View>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    elevation: 30,
    backgroundColor: colors.background,
    marginHorizontal: -1,
    // borderWidth:0.5,
    // borderColor:colors.placeholder,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconBackground: {
    backgroundColor: colors.coloruse,
    borderRadius: 12,
  },
  iconWrapper: {
    alignItems: 'center', // Center both icon and label

  },
  iconLabel1: {
    fontSize: 12,
    color: colors.text,
    fontFamily: 'Roboto',
    fontWeight: '700'
  },
  iconLabel: {
    fontSize: 12,
    color: colors.text,
    marginBottom: 20,
    fontFamily: 'Roboto',
    fontWeight: '700'
  },
});

export default FrameComponent;
