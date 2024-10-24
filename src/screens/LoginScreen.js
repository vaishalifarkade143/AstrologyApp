import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button, useTheme ,Card} from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const theme = useTheme();

  const handleLogin = () => {
    // Add login logic here
    console.log('Login button pressed');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
       <Card style={styles.card}>
       <Card.Content>
      <Text style={[styles.title, { color: theme.colors.text }]}>Login</Text>
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
      <Button mode="contained" onPress={handleLogin} 
      style={[styles.button, { backgroundColor: theme.colors.primary }]}>
        Login
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={[styles.registerText, { color: theme.colors.primary }]}>Don't have an account? Register</Text>
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
});

export default LoginScreen;









// import React from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import { Button, useTheme, Card } from 'react-native-paper';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const theme = useTheme();

//   const handleLogin = () => {
//     // Add login logic here
//     console.log('Login button pressed');
//   };

//   return (
//     <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
//       <Card style={styles.card}>
//         <Card.Content>
//           <Text style={[styles.title, { color: theme.colors.text }]}>Login</Text>
//           <TextInput
//             style={[
//               styles.input,
//               {
//                 backgroundColor: theme.colors.surface,
//                 color: theme.colors.text,
//                 borderColor: theme.colors.placeholder,
//               },
//             ]}
//             placeholder="Email"
//             placeholderTextColor={theme.colors.placeholder}
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//           />
//           <TextInput
//             style={[
//               styles.input,
//               {
//                 backgroundColor: theme.colors.surface,
//                 color: theme.colors.text,
//                 borderColor: theme.colors.placeholder,
//               },
//             ]}
//             placeholder="Password"
//             placeholderTextColor={theme.colors.placeholder}
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//           />
//           <Button
//             mode="contained"
//             onPress={handleLogin}
//             style={[styles.button, { backgroundColor: theme.colors.primary }]}
//             labelStyle={{ color: theme.colors.onPrimary }}
//           >
//             Login
//           </Button>

//           <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//             <Text style={[styles.registerText, { color: theme.colors.primary }]}>
//               Don't have an account? Register
//             </Text>
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
//   card: {
//     borderRadius: 8,
//     elevation: 4,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 32,
//   },
//   input: {
//     borderWidth: 1,
//     padding: 12,
//     marginBottom: 16,
//     borderRadius: 8,
//     fontSize: 16,
//   },
//   button: {
//     marginVertical: 16,
//     paddingVertical: 10,
//     borderRadius: 8,
//     elevation: 2,
//   },
//   registerText: {
//     textAlign: 'center',
//     marginTop: 16,
//     fontSize: 16,
//   },
// });

// export default LoginScreen;
