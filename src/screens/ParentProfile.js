

//using flatlist

import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Alert, Text, FlatList, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
import colors from '../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../common/Header';
import { PreferencesContext } from '../context/PreferencesContext';

const { width } = Dimensions.get('window'); // Get screen width for full-width cards

const ParentProfile = ({navigation}) => {
  const { theme } = useContext(PreferencesContext);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageIndex, setPageIndex] = useState(0); // Track the active page index

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

  const profiles = [
    {
      title: "Father's Profile",
      name: profileData.father_name,
      phone: profileData.father_phone,
      additionalData: profileData,
    },
    {
      title: "Mother's Profile",
      name: profileData.mother_name,
      phone: profileData.mother_phone,
      additionalData: profileData,
    }
  ];

  const onScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollX / width);
    setPageIndex(index);
  };

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/back.png')}
        onClickLeftIcon={() => navigation.goBack()}
      />

      <View style={[styles.roundedContainer, { backgroundColor: theme.colors.background }]}>
        <FlatList
          data={profiles}
          horizontal
          pagingEnabled
          snapToInterval={width} // Snap to full-width item
          decelerationRate="fast"
          onScroll={onScroll}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.profilePage}>
              <Card style={styles.card}>
                <Card.Content>
                  <ProfileSection
                    title={item.title}
                    name={item.name}
                    phone={item.phone}
                    additionalData={item.additionalData}
                  />
                </Card.Content>
              </Card>
            </View>
          )}
        />

        {/* Dot Indicators */}
        <View style={styles.dotContainer}>
          {profiles.map((_, i) => (
            <React.Fragment key={i}>
              <View
                style={[
                  styles.dot,
                  pageIndex === i ? styles.activeDot : styles.inactiveDot,
                ]}
              />
              {i < profiles.length - 1 && <View style={styles.dotDivider} />}
            </React.Fragment>
          ))}
        </View>
      </View>
    </View>
  );
};

const ProfileSection = ({ title, name, phone, additionalData }) => (
  <View style={styles.profileContainer}>
    <View style={styles.avatarFallback}>
      <Ionicons name="person-circle-sharp" size={110} color={colors.coloruse} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>{phone}</Text>
    </View>
    <View style={styles.dividerView} />
    <TextRow label="Date of Birth" value={additionalData.dob} />
    <View style={styles.dividerView} />
    <TextRow label="Class" value={additionalData.class_name} />
    <View style={styles.dividerView} />
    <TextRow label="Roll Number" value={additionalData.roll_no} />
    <View style={styles.dividerView} />
    <TextRow label="Religion" value={additionalData.religion} />
    <View style={styles.dividerView} />
    <TextRow label="Cast" value={additionalData.cast} />
    <View style={styles.dividerView} />
    <TextRow label="Gender" value={additionalData.gender} />
    <View style={styles.dividerView} />
    <TextRow label="Blood Group" value={additionalData.blood_group} />
  </View>
);

const TextRow = ({ label, value }) => (
  <View style={styles.profileData}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

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
    borderRadius: 20,
    borderColor: colors.coloruse,
    marginTop: 60,
    borderWidth: 1,
    elevation: 4,
    width: width * 0.9,
    paddingBottom: 15,
  },
  profilePage: {
    width: width, // Ensures each profile page takes full screen width
    paddingHorizontal: 10,
  },
  profileContainer: {
    flexDirection: 'column',
  },
  avatarFallback: {
    alignSelf: 'center',
    marginTop: -50,
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
    marginVertical: 5,
    height: 1,
    backgroundColor: colors.placeholder,
  },
  profileData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.text,
  },
  value: {
    fontSize: 12,
    color: colors.text,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: colors.coloruse,
  },
  inactiveDot: {
    backgroundColor: colors.placeholder,
  },
  dotDivider: {
    width: 10,
    height: 2,
    backgroundColor: colors.placeholder,
  },
});

export default ParentProfile;









//using scrollview
// import React, { useContext, useEffect, useState } from 'react';
// import { View, StyleSheet, ActivityIndicator, Alert, Text, ScrollView } from 'react-native';
// import { Card } from 'react-native-paper';
// import colors from '../styles/colors';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Header from '../common/Header';
// import { PreferencesContext } from '../context/PreferencesContext';

// const ParentProfile = ({ navigation }) => {
//   const { theme } = useContext(PreferencesContext);
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await fetch('https://acadicronbackend.educron.com/api/admin/dtstudentlist');
//         const result = await response.json();

//         if (result.success && result.data.length > 0) {
//           setProfileData(result.data[0]);
//         } else {
//           throw new Error('No data found');
//         }
//       } catch (err) {
//         setError(err.message);
//         Alert.alert('Error', err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfileData();
//   }, []);

//   if (loading) {
//     return <ActivityIndicator size="large" color={colors.coloruse} style={styles.loader} />;
//   }

//   if (error) {
//     return <Text style={styles.errorText}>Error fetching profile: {error}</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <Header
//         leftIcon={require('../images/back.png')}
//         onClickLeftIcon={() => navigation.goBack()}
//       />

//       <View style={[styles.roundedContainer, { backgroundColor: theme.colors.background }]}>
//         <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
//           {/* Father's Profile Card */}
//           <View style={styles.profilePage}>
//             <Card style={styles.card}>
//               <Card.Content>
//                 <ProfileSection
//                   name={profileData.father_name}
//                   phone={profileData.father_phone}
//                   dob={profileData.dob}
//                   class_name={profileData.class_name}
//                   roll_no={profileData.roll_no}
//                   religion={profileData.religion}
//                   cast={profileData.cast}
//                   gender={profileData.gender}
//                   blood_group={profileData.blood_group}
//                   current_address={profileData.current_address}
//                   permanent_address={profileData.permanent_address}
//                 />
//               </Card.Content>
//             </Card>
//           </View>

//           {/* Mother's Profile Card */}
//           <View style={styles.profilePage}>
//             <Card style={styles.card}>
//               <Card.Content>
//                 <ProfileSection
//                   name={profileData.mother_name}
//                   phone={profileData.mother_phone}
//                   dob={profileData.dob}
//                   class_name={profileData.class_name}
//                   roll_no={profileData.roll_no}
//                   religion={profileData.religion}
//                   cast={profileData.cast}
//                   gender={profileData.gender}
//                   blood_group={profileData.blood_group}
//                   current_address={profileData.current_address}
//                   permanent_address={profileData.permanent_address}
//                 />
//               </Card.Content>
//             </Card>
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// // Reusable Profile Section for each parent
// const ProfileSection = ({
//   name, phone, dob, class_name, roll_no, religion, cast, gender, blood_group, current_address, permanent_address
// }) => (
//   <View style={styles.profileContainer}>
//     <View style={styles.avatarFallback}>
//       <Ionicons name="person-circle-sharp" size={110} color={colors.coloruse} />
//     </View>
//     <View style={styles.infoContainer}>
//       <Text style={styles.name}>{name}</Text>
//       <Text style={styles.info}>{phone}</Text>
//     </View>
//     <View style={styles.dividerView} />
//     <TextRow label="Date of Birth" value={dob} />
//     <TextRow label="Class" value={class_name} />
//     <TextRow label="Roll Number" value={roll_no} />
//     <TextRow label="Religion" value={religion} />
//     <TextRow label="Cast" value={cast} />
//     <TextRow label="Gender" value={gender} />
//     <TextRow label="Blood Group" value={blood_group} />
//     <TextRow label="Current Address" value={current_address} />
//     <TextRow label="Permanent Address" value={permanent_address} />
//   </View>
// );

// const TextRow = ({ label, value }) => (
//   <View style={styles.profileData}>
//     <Text style={styles.label}>{label}</Text>
//     <Text style={styles.value}>{value}</Text>
//   </View>
// );

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
//   card: {
//     backgroundColor: colors.backgroundlight,
//     borderRadius: 20,
//     borderColor: colors.coloruse,
//     marginTop: 60,
//     borderWidth: 1,
//     elevation: 4,
//   },
//   profilePage: {
//     paddingHorizontal: 20,
//   },
//   profileContainer: {
//     flexDirection: 'column',
//   },
//   avatarFallback: {
//     alignSelf: 'center',
//     marginTop: -70,
//     marginBottom: 10,
//     width: 110,
//     height: 110,
//     borderRadius: 55,
//     borderWidth: 1.5,
//     borderColor: colors.coloruse,
//     overflow: 'hidden',
//   },
//   infoContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   name: {
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
//   info: {
//     fontSize: 12,
//     color: colors.text,
//     marginTop: 3,
//     fontWeight: 'bold',
//   },
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorText: {
//     color: 'red',
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   dividerView: {
//     marginTop: 5,
//     height: 1,
//     backgroundColor: colors.placeholder,
//     alignSelf: 'center',
//     marginBottom: 5,
//     width: 330,
//     marginLeft: 30,
//     marginRight: 30,
//   },
//   profileData: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 5,
//   },
//   label: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     color: colors.text,
//   },
//   value: {
//     fontSize: 12,
//     color: colors.text,
//   },
// });

// export default ParentProfile;
