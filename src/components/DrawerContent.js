// // src/components/DrawerContent.js
// // import * as React from 'react';
// // import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
// // import { Drawer } from 'react-native-paper';

// // export default function DrawerContent(props) {
// //   return (
// //     <DrawerContentScrollView {...props}>
// //       <Drawer.Section>
// //         <DrawerItem
// //           label="Home"
// //           onPress={() => props.navigation.navigate('Home')}
// //         />
// //         <DrawerItem
// //           label="Profile"
// //           onPress={() => props.navigation.navigate('Profile')}
// //         />
// //       </Drawer.Section>
// //     </DrawerContentScrollView>
// //   );
// // }












// import React from 'react';
// import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
// import { View, StyleSheet } from 'react-native';
// import { Avatar, Title, Caption, Drawer } from 'react-native-paper';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const DrawerContent = (props) => {
//   return (
//     <View style={{ flex: 1 }}>
//       <DrawerContentScrollView {...props}>
//         <View style={styles.drawerContent}>
//           <View style={styles.userInfoSection}>
//             {/* <Avatar.Image
//               source={require('../../assets/avatar.png')}
//               size={50}
//             /> */}
//             <Title style={styles.title}>John Doe</Title>
//             <Caption style={styles.caption}>@johndoe</Caption>
//           </View>
//           <Drawer.Section style={styles.drawerSection}>
//             <DrawerItem
//               icon={({ color, size }) => (
//                 <MaterialCommunityIcons name="home-outline" color={color} size={size} />
//               )}
//               label="Home"
//               onPress={() => { props.navigation.navigate('Home') }}
//             />
//             <DrawerItem
//               icon={({ color, size }) => (
//                 <MaterialCommunityIcons name="account-outline" color={color} size={size} />
//               )}
//               label="Profile"
//               onPress={() => { props.navigation.navigate('Profile') }}
//             />
//           </Drawer.Section>
//         </View>
//       </DrawerContentScrollView>
//       <Drawer.Section style={styles.bottomDrawerSection}>
//         <DrawerItem
//           icon={({ color, size }) => (
//             <MaterialCommunityIcons name="exit-to-app" color={color} size={size} />
//           )}
//           label="Sign Out"
//           onPress={() => { }}
//         />
//       </Drawer.Section>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//   },
//   userInfoSection: {
//     paddingLeft: 20,
//   },
//   title: {
//     fontSize: 16,
//     marginTop: 3,
//     fontWeight: 'bold',
//   },
//   caption: {
//     fontSize: 14,
//     lineHeight: 14,
//   },
//   drawerSection: {
//     marginTop: 15,
//   },
//   bottomDrawerSection: {
//     marginBottom: 15,
//     borderTopColor: '#f4f4f4',
//     borderTopWidth: 1,
//   },
// });

// export default DrawerContent;














import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const DrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={require('../images/profile.png')}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>John Doe</Title>
                <Caption style={styles.caption}>@johndoe</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => { props.navigation.navigate('Home') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => { props.navigation.navigate('Profile') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="bookmark-outline" color={color} size={size} />
              )}
              label="Bookmarks"
              onPress={() => { props.navigation.navigate('Bookmarks') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => { props.navigation.navigate('Settings') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="account-check-outline" color={color} size={size} />
              )}
              label="Support"
              onPress={() => { props.navigation.navigate('Support') }}
            />
          </Drawer.Section>

          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => {}}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={false} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => { }}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
