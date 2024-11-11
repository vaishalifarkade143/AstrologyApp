


import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Surface, IconButton, } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';
import spacing from '../styles/spacing';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const FrameComponent = () => {
  const navigation = useNavigation();
  // console.log("nkhidfsadch", navigation);
  return (
    <Surface style={styles.container}>
      <View style={styles.iconContainer}>
        {/* Home Icon */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <FontAwesome name="money" size={22} color="#fff" />}
            style={styles.iconBackground}
            onPress={() =>
               console.log("Home pressed")

            }
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
          <Text style={styles.iconLabel}>Profile</Text>
        </View>


        {/* Settings Icon */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <Ionicons name="people-sharp" size={24} color="#fff" />}
            style={styles.iconBackground}
            onPress={() =>{
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
            onPress={() => console.log("Attendance pressed")}
          />
          <Text style={styles.iconLabel}>Attendance</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        {/* Home Icon */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <FontAwesome name="home" size={24} color="#fff" />}
            style={styles.iconBackground}
            onPress={() => console.log("Home pressed")}
          />
          <Text style={styles.iconLabel}>Home</Text>
        </View>

        {/* Notifications Icon */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <FontAwesome name="bell" size={24} color="#fff" />}
            style={styles.iconBackground}
            onPress={() => console.log("Notifications pressed")}
          />
          <Text style={styles.iconLabel}>Notifications</Text>
        </View>

        {/* Settings Icon */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <FontAwesome name="cog" size={24} color="#fff" />}
            style={styles.iconBackground}
            onPress={() => console.log("Settings pressed")}
          />
          <Text style={styles.iconLabel}>Settings</Text>
        </View>

        {/* Attendance Icon */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <FontAwesome name="check-square" size={24} color="#fff" />}
            style={styles.iconBackground}
            onPress={() => console.log("Attendance pressed")}
          />
          <Text style={styles.iconLabel}>Attendance</Text>
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
  iconLabel: {
    fontSize: 12,
    color: colors.text,
    marginBottom: 20,
    fontFamily: 'Roboto',
    fontWeight: '700'
  },
});

export default FrameComponent;
