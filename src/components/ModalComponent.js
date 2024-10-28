// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import React from 'react';
// import colors from '../styles/colors';
// import Icon from 'react-native-vector-icons/FontAwesome';


// const ModalComponent = () => {
//   return (
//     <View style={styles.modalContent}>
//     <Text style={styles.modalTitle}>Choose an Option</Text>
//     <View style={styles.iconContainer}>
//         <TouchableOpacity style={styles.iconButton}>
//             <View style={styles.iconBackground}>
//                 <Icon name="home" size={24} color="#fff" />
//             </View>
//             <Text style={styles.iconLabel}>Home</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.iconButton}>
//             <View style={styles.iconBackground}>
//                 <Icon name="bell" size={24} color="#fff" />
//             </View>
//             <Text style={styles.iconLabel}>Notification</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.iconButton}>
//             <View style={styles.iconBackground}>
//                 <Icon name="cog" size={24} color="#fff" />
//             </View>
//             <Text style={styles.iconLabel}>Settings</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.iconButton}>
//             <View style={styles.iconBackground}>
//                 <Icon name="check-square" size={24} color="#fff" />
//             </View>
//             <Text style={styles.iconLabel}>Attendance</Text>
//         </TouchableOpacity>
//     </View>
//     <View style={styles.dividerView}></View>
//     {/* Icons Section */}
//     <View style={styles.iconContainer}>

//       <TouchableOpacity style={styles.iconButton}>
//         <View style={styles.iconBackground}>
//           <Icon name="home" size={24} color="#fff" />
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.iconButton}>
//         <View style={styles.iconBackground}>
//           <Icon name="bell" size={24} color="#fff" />
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.iconButton}>
//         <View style={styles.iconBackground}>
//           <Icon name="cog" size={24} color="#fff" />
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.iconButton}>
//         <View style={styles.iconBackground}>
//           <Icon name="check-square" size={24} color="#fff" />
//         </View>
//       </TouchableOpacity>
//     </View>
//     {/* <View style={styles.iconContainer}>

//       <TouchableOpacity style={styles.iconButton}>
//         <View style={styles.iconBackground}>
//           <Icon name="home" size={24} color="#fff" />
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.iconButton}>
//         <View style={styles.iconBackground}>
//           <Icon name="bell" size={24} color="#fff" />
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.iconButton}>
//         <View style={styles.iconBackground}>
//           <Icon name="cog" size={24} color="#fff" />
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.iconButton}>
//         <View style={styles.iconBackground}>
//           <Icon name="check-square" size={24} color="#fff" />
//         </View>
//       </TouchableOpacity>
//     </View>
//     <View style={styles.iconContainer}>

//       <TouchableOpacity style={styles.iconButton}>
//         <View style={styles.iconBackground}>
//           <Icon name="home" size={24} color="#fff" />
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.iconButton}>
//         <View style={styles.iconBackground}>
//           <Icon name="bell" size={24} color="#fff" />
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.iconButton}>
//         <View style={styles.iconBackground}>
//           <Icon name="cog" size={24} color="#fff" />
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.iconButton}>
//         <View style={styles.iconBackground}>
//           <Icon name="check-square" size={24} color="#fff" />
//         </View>
//       </TouchableOpacity>
//     </View> */}

//     {/* <View style={styles.iconContainer}>

//       <TouchableOpacity style={styles.iconButton}>
//         <View style={styles.iconBackground}>
//           <Icon name="home" size={24} color="#fff" />
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.iconButton}>
//         <View style={styles.iconBackground}>
//           <Icon name="bell" size={24} color="#fff" />
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.iconButton}>
//         <View style={styles.iconBackground}>
//           <Icon name="cog" size={24} color="#fff" />
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.iconButton}>
//         <View style={styles.iconBackground}>
//           <Icon name="check-square" size={24} color="#fff" />
//         </View>
//       </TouchableOpacity>
//     </View> */}
//   </View>
//   )
// }

// const styles = StyleSheet.create({
//     modalContent: {
//         backgroundColor: colors.background,
//         padding: 20,
//         borderTopLeftRadius: 20, // Round top corners
//         borderTopRightRadius: 20, // Round top corners
//         alignItems: 'center',
//       },
//       modalTitle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 10,
//       },
//       iconContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         width: '100%',
//         marginVertical: 20,
//       },
//       iconButton: {
//         alignItems: 'center',
//       },
//       iconBackground: {
//         backgroundColor: colors.coloruse, // Background color for icon
//         padding: 10,
//         borderRadius: 10, // Circular background
//         marginBottom: 5, // Space between icon and label
//       },
//       iconLabel: {
//         fontSize: 12,
//         color: colors.text,
//         fontFamily: 'Roboto',
//         fontWeight:'700'
//       },
//       dividerView: {
//         height: 1.2,
//         backgroundColor: colors.placeholder,
//         width: 330,
//         marginLeft: 10,
//         marginRight:10

//       },
// })
// export default ModalComponent;






























import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Button, Switch, TouchableRipple, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PreferencesContext } from '../context/PreferencesContext';
import colors from '../styles/colors'; // Ensure colors.js is correctly imported

const ModalComponent = () => {
    // Accessing theme and toggle function from PreferencesContext
    const { toggleTheme, isDarkTheme } = useContext(PreferencesContext);
    const theme = useTheme();

    return (
        <View style={[styles.modalContent, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.modalTitle, { color: theme.colors.text }]}>Choose an Option</Text>

            {/* Icon Buttons Section */}
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconButton}>
                    <View style={[styles.iconBackground, { backgroundColor: colors.coloruse }]}>
                        <Icon name="home" size={24} color="#fff" />
                    </View>
                    <Text style={[styles.iconLabel, { color: theme.colors.text }]}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton}>
                    <View style={[styles.iconBackground, { backgroundColor: colors.coloruse }]}>
                        <Icon name="bell" size={24} color="#fff" />
                    </View>
                    <Text style={[styles.iconLabel, { color: theme.colors.text }]}>Notification</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton}>
                    <View style={[styles.iconBackground, { backgroundColor: colors.coloruse }]}>
                        <Icon name="cog" size={24} color="#fff" />
                    </View>
                    <Text style={[styles.iconLabel, { color: theme.colors.text }]}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton}>
                    <View style={[styles.iconBackground, { backgroundColor: colors.coloruse }]}>
                        <Icon name="check-square" size={24} color="#fff" />
                    </View>
                    <Text style={[styles.iconLabel, { color: theme.colors.text }]}>Attendance</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.dividerView}></View>

            {/* Toggle Theme Section */}
            <View style={styles.iconContainer}>
                <View style={{marginLeft:10}}>
                    <TouchableRipple onPress={toggleTheme} 
                    rippleColor="rgba(0, 0, 0, .32)"
                     style={styles.iconButton}>
                        <View style={[styles.iconBackground1,
                             { backgroundColor: colors.coloruse }]}>
                            <Switch value={isDarkTheme}
                             onValueChange={toggleTheme}
                             color={theme.colors.primary} />
                        </View>
                    </TouchableRipple>
                    {/* <Text style={[styles.iconLabel, { color: theme.colors.text }]}>Dark theme</Text> */}
                </View>
                <TouchableOpacity style={styles.iconButton}>
                    <View style={[styles.iconBackground, { backgroundColor: colors.coloruse }]}>
                        <Icon name="bell" size={24} color="#fff" />
                    </View>
                    {/* <Text style={[styles.iconLabel, { color: theme.colors.text }]}>Notification</Text> */}
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton}>
                    <View style={[styles.iconBackground, { backgroundColor: colors.coloruse }]}>
                        <Icon name="cog" size={24} color="#fff" />
                    </View>
                    {/* <Text style={[styles.iconLabel, { color: theme.colors.text }]}>Settings</Text> */}
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton}>
                    <View style={[styles.iconBackground, { backgroundColor: colors.coloruse }]}>
                        <Icon name="check-square" size={24} color="#fff" />
                    </View>
                    {/* <Text style={[styles.iconLabel, { color: theme.colors.text }]}>Attendance</Text> */}
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        padding: 16,
        borderRadius: 12,
        elevation: 4,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    iconButton: {
        alignItems: 'center',
    },
    iconBackground: {
        padding: 12,
        borderRadius: 12,
    },
    iconLabel: {
        fontSize: 12,
        marginTop: 8,
        fontFamily: 'Roboto',
        fontWeight: '700',
    },

    iconBackground1: {
        paddingLeft: 1,
        paddingRight: 1,
        paddingBottom: 10,
        paddingTop: 11,
        borderRadius: 12,
        marginLeft:-13,
        
    },
    dividerView: {
        marginTop: -10,
        height: 1.5,
        backgroundColor: colors.placeholder,
        alignSelf: 'center',
        marginBottom:10,
        width: 330,
         marginLeft: 30,
         marginRight:30
      },
});

export default ModalComponent;

