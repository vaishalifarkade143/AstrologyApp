import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';
import colors from '../styles/colors';

const ProfileComponent = () => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.profileContainer}>
          {/* Profile Image */}
          <Avatar.Image 
            size={80} 
            source={{ uri: 'https://example.com/profile-image.png' }} 
            style={styles.avatar} 
          />

          {/* Profile Information */}
          <View style={styles.infoContainer}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.info}>Roll No: 123456</Text>
            <Text style={styles.info}>Class: 10</Text>
            {/* <Text style={styles.info}>Year: 2024</Text> */}
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor:colors.backgroundlight,
    marginHorizontal: -1,
    borderRadius: 20,
    borderColor:colors.coloruse,
    marginBottom:15,
    borderWidth:1,
    elevation: 4, // Adds a subtle shadow effect for Android
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 12,
    color: colors.text,
    marginTop: 3,
    fontFamily: 'Roboto',
    fontWeight:'650'
  },
});

export default ProfileComponent;
