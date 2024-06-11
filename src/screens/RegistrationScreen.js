// import React from 'react';
// import { View, Text, StyleSheet, TextInput } from 'react-native';
// import { Button } from 'react-native-paper';

// const RegistrationScreen = ({ navigation }) => {
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [confirmPassword, setConfirmPassword] = React.useState('');

//   const handleRegister = () => {
//     // Add registration logic here
//     console.log('Register button pressed');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Register</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Password"
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//         secureTextEntry
//       />
//       <Button mode="contained" onPress={handleRegister}>
//         Register
//       </Button>
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
// });

// export default RegistrationScreen;




import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const theme = useTheme(); // Access the theme

  const handleRegister = () => {
    // Add registration logic here
    console.log('Register button pressed');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Register</Text>
      <TextInput
        style={[styles.input, { backgroundColor: theme.colors.surface, color: theme.colors.text }]}
        placeholder="Email"
        placeholderTextColor={theme.colors.text} // Set placeholder color
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, { backgroundColor: theme.colors.surface, color: theme.colors.text }]}
        placeholder="Password"
        placeholderTextColor={theme.colors.text} // Set placeholder color
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={[styles.input, { backgroundColor: theme.colors.surface, color: theme.colors.text }]}
        placeholder="Confirm Password"
        placeholderTextColor={theme.colors.text} // Set placeholder color
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleRegister} 
      style={{ marginTop: 16, backgroundColor: theme.colors.primary }}>
        Register
      </Button>
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
});

export default RegistrationScreen;

