
import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Alert, Text } from 'react-native';
import { Card } from 'react-native-paper';
import colors from '../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../common/Header';
import { PreferencesContext } from '../context/PreferencesContext';

const ProfileScreen = ({ navigation }) => {
  const { theme } = useContext(PreferencesContext);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const handleSignOut = () => {
  //   console.log('Signing out...');
  //   navigation.navigate('Login');
  // };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('https://acadicronbackend.educron.com/api/admin/dtstudentlist');
        const result = await response.json();

        if (result.success && result.data.length > 0) {
          setProfileData(result.data[0]);
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

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        leftIcon={require('../images/back.png')}
        // rightIcon={require('../images/logout.png')}
        onClickLeftIcon={() => navigation.goBack()}
        // onClickRightIcon={handleSignOut}
      />

      <View style={[styles.roundedContainer, { backgroundColor: theme.colors.background }]}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.profileContainer}>
              <View style={styles.avatarFallback}>
                <Ionicons name="person-circle-sharp" size={110} color={colors.coloruse} />
              </View>

              <View style={styles.infoContainer}>
                <Text style={styles.name}>{`${profileData.firstname} ${profileData.lastname}`}</Text>
                
                <Text style={styles.info}> {profileData.father_phone}</Text>
                
              </View>

              <View style={styles.dividerView}></View>

              <View style={styles.profileData}>
                <Text style={styles.label}>Mother's Name </Text>
                <Text style={styles.value}>{profileData.mother_name}</Text>
              </View>
              <View style={styles.dividerView}></View>

              <View style={styles.profileData}>
                <Text style={styles.label}>Date of Birth </Text>
                <Text style={styles.value}>{profileData.dob}</Text>
              </View>
              <View style={styles.dividerView}></View>

              <View style={styles.profileData}>
                <Text style={styles.label}>Class </Text>
                <Text style={styles.value}>{profileData.class_name}</Text>
              </View>
              <View style={styles.dividerView}></View>

              <View style={styles.profileData}>
                <Text style={styles.label}>Roll Number </Text>
                <Text style={styles.value}>{profileData.roll_no}</Text>
              </View>
              <View style={styles.dividerView}></View>

              <View style={styles.profileData}>
                <Text style={styles.label}>Religion</Text>
                <Text style={styles.value}>{profileData.religion}</Text>
              </View>
              <View style={styles.dividerView}></View>

              <View style={styles.profileData}>
                <Text style={styles.label}>Cast</Text>
                <Text style={styles.value}>{profileData.cast}</Text>
              </View>
              <View style={styles.dividerView}></View>

              <View style={styles.profileData}>
                <Text style={styles.label}>Gender </Text>
                <Text style={styles.value}>{profileData.gender}</Text>
              </View>
              <View style={styles.dividerView}></View>

              <View style={styles.profileData}>
                <Text style={styles.label}>Blood Group </Text>
                <Text style={styles.value}>{profileData.blood_group}</Text>
              </View>
              <View style={styles.dividerView}></View>

              <View style={{marginBottom:1}}>
                <Text style={styles.label}>Current Address </Text>
                <Text style={styles.value}>{profileData.current_address}</Text>
              </View>
              <View style={styles.dividerView}></View>

              <View style={{marginBottom:1}}>
                <Text style={styles.label}>Permanent Address </Text>
                <Text style={styles.value}>{profileData.permanent_address}</Text>
              </View>
              <View style={styles.dividerView}/>
            </View>


          </Card.Content>
        </Card>
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
  card: {
    backgroundColor: colors.backgroundlight,
    // marginHorizontal: 3,
    borderRadius: 20,
    borderColor: colors.coloruse,
    marginTop: 60,
    borderWidth: 1,
    elevation: 4,
  },
  profileContainer: {
    flexDirection: 'column',
    // alignItems: 'center',
  },
  profileData: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Aligns label and value at opposite ends
    marginBottom: 5,
    // paddingHorizontal: 10,
  },
  avatarFallback: {
    alignSelf: 'center',
    marginTop: -70,
    marginBottom: 10,
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 1.5,
    borderColor: colors.coloruse,
    overflow: 'hidden',
  },
  infoContainer: {
    alignItems: 'center',
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
  dividerView: {
    marginTop: 5,
    height: 1,
    backgroundColor: colors.placeholder,
    alignSelf: 'center',
    marginBottom: 5,
    width: 330,
    marginLeft: 30,
    marginRight: 30
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.text,
  },
  value: {
    fontSize: 12,
    color: colors.text,
    fontFamily: 'Roboto',
  },
});

export default ProfileScreen;
