
import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Title, Caption, Drawer, Text, TouchableRipple, Switch, useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PreferencesContext } from '../context/PreferencesContext';

const DrawerContent = (props) => {
  const { toggleTheme, isDarkTheme } = useContext(PreferencesContext);
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={require('../images/profile.png')}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={[styles.title, { color: theme.colors.text }]}>John Doe</Title>
                <Caption style={[styles.caption, { color: theme.colors.text }]}>@johndoe</Caption>
              </View>
            </View>
            </TouchableOpacity>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="home-outline" color={color} size={size} />
              )}
              label="Home"
              labelStyle={{ color: theme.colors.text }}
              onPress={() => { props.navigation.navigate('Home') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              labelStyle={{ color: theme.colors.text }}
              onPress={() => { props.navigation.navigate('Profile') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="bookmark-outline" color={color} size={size} />
              )}
              label="Bookmarks"
              labelStyle={{ color: theme.colors.text }}
              onPress={() => { props.navigation.navigate('Bookmarks') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings-outline" color={color} size={size} />
              )}
              label="Settings"
              labelStyle={{ color: theme.colors.text }}
              onPress={() => { props.navigation.navigate('Settings') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="account-check-outline" color={color} size={size} />
              )}
              label="Support"
              labelStyle={{ color: theme.colors.text }}
              onPress={() => { props.navigation.navigate('Support') }}
            />
          </Drawer.Section>

          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={toggleTheme}>
              <View style={styles.preference}>
                <Text style={{ color: theme.colors.text }}>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
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
          labelStyle={{ color: theme.colors.text }}
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
