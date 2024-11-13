import React, { useContext } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import Header from '../common/Header';
import { PreferencesContext } from '../context/PreferencesContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get("window");

const PayNow =({ navigation }) => {
  const { theme } = useContext(PreferencesContext);

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/back.png')}
        title="Fees Details"
        onClickLeftIcon={() => navigation.goBack()}
      />
      
      <View style={[styles.roundedContainer, 
        { backgroundColor: theme.colors.background }]}>
      <Text>Hii</Text>
      </View>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.coloruse,
  },
  roundedContainer: {
    flex: 1,
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    elevation: 5,
  },
})

export default PayNow;