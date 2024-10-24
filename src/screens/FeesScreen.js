// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
// import { firestore } from './firebase'; // Adjust the import according to your project structure
// import firebase from '@react-native-firebase/app';


// const ChatScreen = () => {
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState('');

//   useEffect(() => {
//     const unsubscribe = firestore()
//       .collection('chats')
//       .orderBy('createdAt', 'desc')
//       .onSnapshot((querySnapshot) => {
//         const messages = querySnapshot.docs.map(doc => {
//           const firebaseData = doc.data();

//           const data = {
//             _id: doc.id,
//             text: '',
//             createdAt: new Date().getTime(),
//             ...firebaseData,
//           };

//           return data;
//         });

//         setMessages(messages);
//       });

//     return () => unsubscribe();
//   }, []);

//   const handleSend = () => {
//     if (text.length > 0) {
//       firestore()
//         .collection('chats')
//         .add({
//           text,
//           createdAt: new Date().getTime(),
//         });
//       setText('');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={messages}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <View style={styles.messageContainer}>
//             <Text style={styles.messageText}>{item.text}</Text>
//           </View>
//         )}
//         inverted
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           value={text}
//           onChangeText={(value) => setText(value)}
//           placeholder="Type a message"
//         />
//         <Button title="Send" onPress={handleSend} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   messageContainer: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   messageText: {
//     fontSize: 16,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     marginRight: 10,
//   },
// });

// export default ChatScreen;


import { View, Text } from 'react-native'
import React from 'react'

const ChatScreen = () => {
  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  )
}

export default ChatScreen