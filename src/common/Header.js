import { View, Image, TouchableOpacity, StyleSheet ,Text} from 'react-native'
import React from 'react'


const Header = ({ leftIcon, rightIcon, title, onClickLeftIcon, onClickRightIcon }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.btn}
                onPress={() => {
                    onClickLeftIcon();
                }}>
                <Image source={leftIcon} style={styles.icon}/>
            </TouchableOpacity>
              {/* Display text in the middle */}
              <Text style={styles.titleText}>{title}</Text>
            {/* <Image source={middleIcon} style={styles.midicon} /> */}
            <TouchableOpacity style={styles.btn}
                onPress={() => {
                    onClickRightIcon();
                }}>
                <Image source={rightIcon} style={styles.logoicon} />
            </TouchableOpacity>
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    header: {
        height: 50,
        // backgroundColor: '#B9E5E8',//,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
       
    },
    btn: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    midicon: {
        width: 150,
        height: 45,
    },
    logoicon: {
        width: 20,
        height: 20,
    },
    icon: {
        width: 25,
        height: 25,
        tintColor: '#fff',
    },
    titleText: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 13,
        color: "#fff",
        marginLeft:20,
        // textAlign: 'center',
        flex: 1,  // To center the title properly
    },
});