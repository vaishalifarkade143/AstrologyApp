import React, { useContext } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import colors from '../styles/colors';
import Header from '../common/Header';
import { PreferencesContext } from '../context/PreferencesContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import spacing from '../styles/spacing';

const { width } = Dimensions.get("window");

const Fee = ({ navigation }) => {
  const { theme } = useContext(PreferencesContext);

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/back.png')}
        title="Fees Details"
        onClickLeftIcon={() => navigation.goBack()}
      />

      <View
        style={[styles.roundedContainer,
        { backgroundColor: theme.colors.background }]}>
        {/* <Image source={require('../images/money.jpg')} style={styles.image} /> */}
        <ImageBackground
          source={require('../images/money.jpg')}
          style={styles.calendarHeaderBackground}
        > 
        </ImageBackground>
        {/* Paid and Due Containers */}
        <View style={styles.rowContainer}>
          {/* TouchableOpacity for Paid Fee */}
          <TouchableOpacity onPress={() => {
            navigation.navigate('Paidfee');
          }}
            style={styles.touchableFee}>
            <View style={styles.paidfee}>
              <View style={[styles.iconWrapper, { backgroundColor: colors.coloruse }]}>
                <FontAwesome name="money" size={26} color="#fff" />
              </View>

              <Text style={[styles.textStyle, { color: colors.coloruse }]}>₹ 45545</Text>
              {/* </View> */}
              <Text style={styles.textStyle}>Paid Fee</Text>
            </View>
          </TouchableOpacity>

          {/* Due Fee Container */}
          <View style={styles.due}>
            <View style={[styles.iconWrapper, { backgroundColor: colors.red }]}>
              <FontAwesome name="money" size={26} color="#fff" />
            </View>

            <Text style={[styles.textStyle, { color: colors.red }]}>₹ 45545</Text>
            {/* </View> */}
            <Text style={styles.textStyle}>Due Fee</Text>
          </View>
        </View>

        {/* Potli Container */}
        <View style={styles.potliContainer}>
          <Image source={require('../images/potli.jpg')} style={styles.imagepotli} />
        </View>

        {/* Total Container */}
        <View style={styles.total}>
          <View style={styles.iconWrapper1}>
            <FontAwesome name="money" size={26} color="#fff" />
          </View>
          <View>

            <Text style={[styles.textStyle, { color: colors.bluedark }]}>₹ 45545</Text>
            {/* </View> */}
            <Text style={styles.textStyle}>Total Fee</Text>
          </View>
        </View>

        {/* Pay Button */}
        <TouchableOpacity style={styles.payButton} onPress={() => {
          navigation.navigate('Paynow');
        }}>
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
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
    overflow: 'hidden',
  },
  calendarHeaderBackground: {
    width: "105%", // Adjust width to cover the screen fully
    height: Dimensions.get('window').height * 0.3, // 30% of screen height
    justifyContent: 'center',
    borderTopLeftRadius: 20, // Add top-left radius
    borderTopRightRadius: 20, // Add top-right radius
    overflow: 'hidden', // Ensure image respects border radius
    marginTop: -12,
    marginBottom: 10
  },
  image: {
    width: '100%', // Full width of the container
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 5,
    marginLeft:spacing.space_ten,
    marginRight:spacing.space_ten,
  },
  touchableFee: {
    flex: 1.2,
    marginRight: 7.5,
  },
  paidfee: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderColor: colors.coloruse,
    borderWidth: 1,
    backgroundColor: colors.backgroundlight,
    padding: 15,
    height: 190,
    alignItems: 'center',
  },
  due: {
    flex: 1,
    borderTopRightRadius: 20,
    borderColor: colors.red,
    borderWidth: 1,
    backgroundColor: colors.redlight,
    padding: 15,
    height: 190,
    marginLeft: 7.5,
    alignItems: 'center',
  },
  total: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: colors.bluedark,
    borderWidth: 1,
    backgroundColor: colors.bluelight,
    padding: 15,
    marginTop: 15,
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft:spacing.space_ten,
    marginRight:spacing.space_ten,
  },
  textStyle: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },
  potliContainer: {
    position: 'absolute',
    top: 350,
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 1.8,
    borderColor: colors.brown,
    backgroundColor: colors.backgroundlight,
    alignSelf: "center",
    zIndex: 1,
    overflow: 'hidden', // Ensure circular cropping of the image
  },
  imagepotli: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    // marginBottom:spacing.space_ten
  },
  rupeeIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45, // Size of the circle
    height: 45, // Size of the circle
    borderRadius: 10,
    marginBottom: 10, // Space between icon and label
  },
  iconWrapper1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bluedark,
    width: 45, // Size of the circle
    height: 45,
    borderRadius: 10,
    marginRight: 10, // Space between icon and label (for total fee)
  },
  payButton: {
    backgroundColor: colors.coloruse, // Background color for the button
    paddingVertical: 10,
    paddingHorizontal: 135,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 15,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Fee;
