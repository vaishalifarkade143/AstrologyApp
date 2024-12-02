import React, { useContext } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, FlatList } from 'react-native';
import colors from '../styles/colors';
import Header from '../common/Header';
import { PreferencesContext } from '../context/PreferencesContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get("window");

const PaidFee = ({ navigation }) => {
  const { theme } = useContext(PreferencesContext);

  const feeData = [
    { id: '1', title: 'January Fee', amount: '5000', date: '2023-01-15' },
    { id: '2', title: 'February Fee', amount: '5000', date: '2023-02-15' },
    { id: '3', title: 'March Fee', amount: '5000', date: '2023-03-15' },
    { id: '4', title: 'April Fee', amount: '5000', date: '2023-04-15' },
    { id: '5', title: 'May Fee', amount: '5000', date: '2023-05-15' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.feeItem}>
      <View style={[styles.iconWrapper, { backgroundColor: colors.coloruse }]}>
        <FontAwesome name="money" size={26} color="#fff" />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.feeTitle}>{item.title}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
        <Text style={styles.rec}>Receipt number: vfvgf</Text>
      </View>
      <Text style={styles.feeAmount}>{`₹${item.amount}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/back.png')}
        title="Fees"
        onClickLeftIcon={() => navigation.goBack()}
      />

      <View style={[styles.roundedContainer, { backgroundColor: theme.colors.background }]}>
        <Image source={require('../images/paidfee.jpg')} style={styles.image} />

        <FlatList
          data={feeData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
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
    marginTop: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 15,
  },
  listContent: {
    paddingBottom: 20,
  },
  feeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.coloruse,
    marginVertical: 7,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  textWrapper: {
    flex: 1,
    paddingLeft: 10,
  },
  feeTitle: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
  
  rec: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.coloruse,
    marginTop: 2,
  },
  feeAmount: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.coloruse,
    marginLeft: 10,
  },
});

export default PaidFee;
