// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
// import React from 'react'

// import colors from '../styles/colors';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const FrameComponent = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.iconContainer}>
//                 <TouchableOpacity style={styles.iconButton}>
//                     <View style={styles.iconBackground}>
//                         <Icon name="home" size={24} color="#fff" />
//                     </View>
//                     <Text style={styles.iconLabel}>Home</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.iconButton}>
//                     <View style={styles.iconBackground}>
//                         <Icon name="bell" size={24} color="#fff" />
//                     </View>
//                     <Text style={styles.iconLabel}>Notification</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.iconButton}>
//                     <View style={styles.iconBackground}>
//                         <Icon name="cog" size={24} color="#fff" />
//                     </View>
//                     <Text style={styles.iconLabel}>Settings</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.iconButton}>
//                     <View style={styles.iconBackground}>
//                         <Icon name="check-square" size={24} color="#fff" />
//                     </View>
//                     <Text style={styles.iconLabel}>Attendance</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.iconContainer}>
//                 <TouchableOpacity style={styles.iconButton}>
//                     <View style={styles.iconBackground}>
//                         <Icon name="home" size={24} color="#fff" />
//                     </View>
//                     <Text style={styles.iconLabel}>Home</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.iconButton}>
//                     <View style={styles.iconBackground}>
//                         <Icon name="bell" size={24} color="#fff" />
//                     </View>
//                     <Text style={styles.iconLabel}>Notification</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.iconButton}>
//                     <View style={styles.iconBackground}>
//                         <Icon name="cog" size={24} color="#fff" />
//                     </View>
//                     <Text style={styles.iconLabel}>Settings</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.iconButton}>
//                     <View style={styles.iconBackground}>
//                         <Icon name="check-square" size={24} color="#fff" />
//                     </View>
//                     <Text style={styles.iconLabel}>Attendance</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         padding: 8,  // Outer padding
//         borderRadius: 20,  // Rounded corners for the container
//         backgroundColor: '#fff',  // Background color for the container
//         marginHorizontal: 8,
//         shadowColor: '#000',
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//         elevation: 5,  // Shadow effect for Android
//     },

//     iconContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         width: '100%',
//         marginVertical: 10,
//     },
//     iconButton: {
//         alignItems: 'center',
//     },
//     iconBackground: {
//         backgroundColor: colors.coloruse, // Background color for icon
//         padding: 10,
//         borderRadius: 30, // Circular background
//         marginBottom: 5, // Space between icon and label
//     },
//     iconLabel: {
//         fontSize: 14,
//         color: '#333',
//     },

// });

// export default FrameComponent;


import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { Surface, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import spacing from '../styles/spacing';

const FrameComponent = () => {
  return (
    <Surface style={styles.container}>
      <View style={styles.iconContainer}>
        {/* Home Icon */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <Icon name="home" size={24} color="#fff" />}
            style={styles.iconBackground}
            onPress={() => console.log("Home pressed")}
          />
          <Text style={styles.iconLabel}>Home</Text>
        </View>

        {/* Notifications Icon */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <Icon name="bell" size={24} color="#fff" />}
            style={styles.iconBackground}
            onPress={() => console.log("Notifications pressed")}
          />
          <Text style={styles.iconLabel}>Notifications</Text>
        </View>

        {/* Settings Icon */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <Icon name="cog" size={24} color="#fff" />}
            style={styles.iconBackground}
            onPress={() => console.log("Settings pressed")}
          />
          <Text style={styles.iconLabel}>Settings</Text>
        </View>

        {/* Attendance Icon */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <Icon name="check-square" size={24} color="#fff" />}
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
            icon={() => <Icon name="home" size={24} color="#fff" />}
            style={styles.iconBackground}
            onPress={() => console.log("Home pressed")}
          />
          <Text style={styles.iconLabel}>Home</Text>
        </View>

        {/* Notifications Icon */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <Icon name="bell" size={24} color="#fff" />}
            style={styles.iconBackground}
            onPress={() => console.log("Notifications pressed")}
          />
          <Text style={styles.iconLabel}>Notifications</Text>
        </View>

        {/* Settings Icon */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <Icon name="cog" size={24} color="#fff" />}
            style={styles.iconBackground}
            onPress={() => console.log("Settings pressed")}
          />
          <Text style={styles.iconLabel}>Settings</Text>
        </View>

        {/* Attendance Icon */}
        <View style={styles.iconWrapper}>
          <IconButton
            icon={() => <Icon name="check-square" size={24} color="#fff" />}
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
    marginHorizontal: 7,
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
    fontWeight:'700'
  },
});

export default FrameComponent;
