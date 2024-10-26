import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';


const ModalComponent = () => {
  return (
    <View style={styles.modalContent}>
    <Text style={styles.modalTitle}>Choose an Option</Text>
    <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
            <View style={styles.iconBackground}>
                <Icon name="home" size={24} color="#fff" />
            </View>
            <Text style={styles.iconLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
            <View style={styles.iconBackground}>
                <Icon name="bell" size={24} color="#fff" />
            </View>
            <Text style={styles.iconLabel}>Notification</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
            <View style={styles.iconBackground}>
                <Icon name="cog" size={24} color="#fff" />
            </View>
            <Text style={styles.iconLabel}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
            <View style={styles.iconBackground}>
                <Icon name="check-square" size={24} color="#fff" />
            </View>
            <Text style={styles.iconLabel}>Attendance</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.dividerView}></View>
    {/* Icons Section */}
    <View style={styles.iconContainer}>
      
      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.iconBackground}>
          <Icon name="home" size={24} color="#fff" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.iconBackground}>
          <Icon name="bell" size={24} color="#fff" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.iconBackground}>
          <Icon name="cog" size={24} color="#fff" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.iconBackground}>
          <Icon name="check-square" size={24} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
    {/* <View style={styles.iconContainer}>
      
      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.iconBackground}>
          <Icon name="home" size={24} color="#fff" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.iconBackground}>
          <Icon name="bell" size={24} color="#fff" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.iconBackground}>
          <Icon name="cog" size={24} color="#fff" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.iconBackground}>
          <Icon name="check-square" size={24} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.iconContainer}>
      
      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.iconBackground}>
          <Icon name="home" size={24} color="#fff" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.iconBackground}>
          <Icon name="bell" size={24} color="#fff" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.iconBackground}>
          <Icon name="cog" size={24} color="#fff" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.iconBackground}>
          <Icon name="check-square" size={24} color="#fff" />
        </View>
      </TouchableOpacity>
    </View> */}

    {/* <View style={styles.iconContainer}>
      
      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.iconBackground}>
          <Icon name="home" size={24} color="#fff" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.iconBackground}>
          <Icon name="bell" size={24} color="#fff" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.iconBackground}>
          <Icon name="cog" size={24} color="#fff" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.iconBackground}>
          <Icon name="check-square" size={24} color="#fff" />
        </View>
      </TouchableOpacity>
    </View> */}
  </View>
  )
}

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: colors.background,
        padding: 20,
        borderTopLeftRadius: 20, // Round top corners
        borderTopRightRadius: 20, // Round top corners
        alignItems: 'center',
      },
      modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
      },
      iconButton: {
        alignItems: 'center',
      },
      iconBackground: {
        backgroundColor: colors.coloruse, // Background color for icon
        padding: 10,
        borderRadius: 10, // Circular background
        marginBottom: 5, // Space between icon and label
      },
      iconLabel: {
        fontSize: 12,
        color: colors.text,
        fontFamily: 'Roboto',
        fontWeight:'700'
      },
      dividerView: {
        height: 1.2,
        backgroundColor: colors.placeholder,
        width: 330,
        marginLeft: 10,
        marginRight:10
    
      },
})
export default ModalComponent;
