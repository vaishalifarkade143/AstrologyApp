// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Avatar, Card, Text } from 'react-native-paper';
// import colors from '../styles/colors';

// const ProfileComponent = () => {
//   return (
//     <Card style={styles.card}>
//       <Card.Content>
//         <View style={styles.profileContainer}>
//           {/* Profile Image */}
//           <Avatar.Image 
//             size={80} 
//             source={{ uri: 'https://example.com/profile-image.png' }} 
//             style={styles.avatar} 
//           />

//           {/* Profile Information */}
//           <View style={styles.infoContainer}>
//             <Text style={styles.name}>John Doe</Text>
//             <Text style={styles.info}>Roll No: 123456</Text>
//             <Text style={styles.info}>Class: 10</Text>
//             {/* <Text style={styles.info}>Year: 2024</Text> */}
//           </View>
//         </View>
//       </Card.Content>
//     </Card>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor:colors.backgroundlight,
//     marginHorizontal: -1,
//     borderRadius: 20,
//     borderColor:colors.coloruse,
//     marginBottom:15,
//     borderWidth:1,
//     elevation: 4, // Adds a subtle shadow effect for Android
//   },
//   profileContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   avatar: {
//     marginRight: 16,
//   },
//   infoContainer: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
//   info: {
//     fontSize: 12,
//     color: colors.text,
//     marginTop: 3,
//     fontFamily: 'Roboto',
//     fontWeight:'650'
//   },
// });

// export default ProfileComponent;


















import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';
import colors from '../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileComponent = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState(false); // Track image loading error

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('https://acadicronbackend.educron.com/api/admin/dtstudentlist');
        const result = await response.json();

        if (result.success && result.data.length > 0) {
          setProfileData(result.data[0]); // Assuming you want the first student in the list
        } else {
          throw new Error('No data found');
        }
      } catch (err) {
        setError(err.message);
        Alert.alert('Error', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color={colors.coloruse} style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.errorText}>Error fetching profile: {error}</Text>;
  }
  
  // const imageUrl = profileData.image 
  //   ? `https://acadicronbackend.educron.com/${profileData.image}` 
  //   : <Ionicons name="person-circle-outline" size={24} color="#fff" />; // Replace with your default image path
  
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.profileContainer}>
          {/* Profile Image */}
          {/* <Avatar.Image
            size={80}
            source={imageError ? { uri: '<Ionicons name="person-circle-outline" size={24} color="#fff" />' } : { uri: imageUrl }} // Use default if there's an error
            // source={{ uri: imageUrl }}
            style={styles.avatar}
            onError={() => {
              console.error('Error loading image'); 
            }}
          /> */}
           <View style={styles.avatarFallback}>
            <Ionicons name="person-circle-sharp" size={110} color={colors.coloruse} />
          </View>

          {/* Profile Information */}
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{`${profileData.firstname} ${profileData.lastname}`}</Text>
            <Text style={styles.info}>Roll No: {profileData.roll_no}</Text>
            <Text style={styles.info}>Class: {profileData.class_name}</Text>
            <Text style={styles.info}>Section: {profileData.section_name}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.backgroundlight,
    marginHorizontal: -1,
    borderRadius: 20,
    borderColor: colors.coloruse,
    marginBottom: 15,
    borderWidth: 1,
    elevation: 4, // Adds a subtle shadow effect for Android
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 16,
  },
  avatarFallback: {
    marginRight: 16,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: 110,
    height: 110,
    borderRadius: 55, // Make the view circular
    borderWidth: 1.5,
    borderColor: colors.coloruse,
    overflow: 'hidden',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
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
    fontWeight: 'bold',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  
});

export default ProfileComponent;
