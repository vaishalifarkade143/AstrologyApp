import React,{useState} from 'react';
import { View, Text, StyleSheet, TextInput,Alert,TouchableOpacity  } from 'react-native';
import { Button, useTheme ,Card} from 'react-native-paper';
import colors from '../styles/colors';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const theme = useTheme();

  const handleLogin = async () => {
    try {
      // Prepare the body as a URL-encoded string
      const formBody = new URLSearchParams();
      formBody.append('username', username);
      formBody.append('password', password);

      const response = await fetch('https://acadicronbackend.educron.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Set content type for URL-encoded form data
        },
        body: formBody.toString(), // Convert to string format for fetch
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (data.success) {
        await AsyncStorage.setItem('isLoggedIn', 'true'); // Set as 'true' or save a token if available
        // Navigate to the Home screen if authenticated successfully
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          })
        )
      } else {
        // Show an alert with the message from the response
        Alert.alert('Login Failed', data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Login Error', 'An error occurred. Please try again.');
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
       <Card style={styles.card}>
       <Card.Content>
      <Text style={[styles.title, { color: theme.colors.text }]}>Login</Text>
      <TextInput
        style={[styles.input, { backgroundColor: theme.colors.surface, color: theme.colors.text }]}
        placeholder="Username"
        placeholderTextColor={theme.colors.text} // Set placeholder color
        value={username}
        onChangeText={setUsername}
        keyboardType="name-phone-pad"
      />
      <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input1, { flex: 1, backgroundColor: theme.colors.surface, color: theme.colors.text }]}
              placeholder="Password"
              placeholderTextColor={theme.colors.text}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Icon
                name={passwordVisible ? 'eye-off' : 'eye'}
                size={24}
                color={theme.colors.text}
              />
            </TouchableOpacity>
          </View>
      <Button mode="contained" onPress={handleLogin} 
      style={[styles.button, { backgroundColor: colors.coloruse }]}>
        Login
      </Button>
      <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
      </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 16,
    borderRadius: 4,
  },
  input1: {
    // borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    // marginBottom: 16,
    borderRadius: 4,
    // paddingRight:5
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,

  },
  button: {
    marginBottom: 16,
  },
  registerText: {
    textAlign: 'center',
    marginTop: 16,
  },
  card: {
        borderRadius: 8,
        elevation: 4,
      },
      forgotPasswordText: {
        textAlign: 'center',
        color: colors.coloruse,
        marginTop: 16,
        fontWeight: 'bold',
      },
});

export default LoginScreen;














// import React, { useState, useContext } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { Button, Card, useTheme } from 'react-native-paper';
// import { AuthContext } from '../context/AuthContext';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import colors from '../styles/colors';
// const LoginScreen = ({ navigation }) => {
//   const { login, isLoading } = useContext(AuthContext); // Access login function from AuthContext
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const theme = useTheme();
//   const handleLogin = async () => {
//     if (!username || !password) {
//       Alert.alert('Error', 'Please enter both username and password');
//       return;
//     }
//     await login(username, password); // Call login function
//   };
//   return (
//     <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
//       <Card style={styles.card}>
//         <Card.Content>
//           <Text style={[styles.title, { color: theme.colors.text }]}>Login</Text>
//           <TextInput
//             style={[styles.input, { backgroundColor: theme.colors.surface, color: theme.colors.text }]}
//             placeholder="Username"
//             placeholderTextColor={theme.colors.text}
//             value={username}
//             onChangeText={setUsername}
//           />
//           <View style={styles.passwordContainer}>
//             <TextInput
//               style={[styles.input, { flex: 1, backgroundColor: theme.colors.surface, color: theme.colors.text }]}
//               placeholder="Password"
//               placeholderTextColor={theme.colors.text}
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={!passwordVisible}
//             />
//             <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
//               <Icon name={passwordVisible ? 'eye-off' : 'eye'} size={24} color={theme.colors.text} />
//             </TouchableOpacity>
//           </View>
//           <Button
//             mode="contained"
//             onPress={handleLogin}
//             loading={isLoading}
//             disabled={isLoading}
//             style={styles.button}
//           >Login
//           </Button>
//           <TouchableOpacity onPress={() => 
//             navigation.navigate('ForgotPassword')
//             }>
//             <Text style={styles.forgotPasswordText}>Forgot Password</Text> {/* Correct */}
//           </TouchableOpacity>
//         </Card.Content>
//       </Card>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     textAlign: 'center',
//     marginBottom: 24,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 12,
//     marginBottom: 16,
//     borderRadius: 4,
//   },
//   input1: {
//     // borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 12,
//     // marginBottom: 16,
//     borderRadius: 4,
//     // paddingRight:5
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     marginBottom: 16,

//   },
//   button: {
//     marginBottom: 16,
//   },
//   registerText: {
//     textAlign: 'center',
//     marginTop: 16,
//   },
//   card: {
//     borderRadius: 8,
//     elevation: 4,
//   },
//   forgotPasswordText: {
//     textAlign: 'center',
//     color: colors.coloruse,
//     marginTop: 16,
//     fontWeight: 'bold',
//   },
// });


// export default LoginScreen;
