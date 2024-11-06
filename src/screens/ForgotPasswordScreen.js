import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { Button, Card } from 'react-native-paper';
import colors from '../styles/colors';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

//   const handlePasswordReset = async () => {
//     if (!email) {
//       Alert.alert('Please enter your email');
//       return;
//     }

//     try {
//       const response = await fetch('https://acadicronbackend.educron.com/reset-password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();
//       if (data.success) {
//         Alert.alert('Password Reset', 'Please check your email for reset instructions.');
//         navigation.goBack();
//       } else {
//         Alert.alert('Error', data.message || 'Failed to send password reset email.');
//       }
//     } catch (error) {
//       console.error('Error resetting password:', error);
//       Alert.alert('Error', 'An error occurred. Please try again.');
//     }
//   };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Forgot Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#666"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Button mode="contained" 
        //   onPress={handlePasswordReset}
           style={styles.button}>
            Reset Password
          </Button>
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
  button: {
    marginTop: 16,
    backgroundColor: colors.coloruse,
  },
  card: {
    borderRadius: 8,
    elevation: 4,
  },
});

export default ForgotPasswordScreen;
