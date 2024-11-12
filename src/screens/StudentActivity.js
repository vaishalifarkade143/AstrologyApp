import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Alert, Text, FlatList, Dimensions } from 'react-native';
import colors from '../styles/colors';
import Header from '../common/Header';
import { PreferencesContext } from '../context/PreferencesContext';


const StudentActivity = ({ navigation }) => {
    const { theme } = useContext(PreferencesContext);
    return (
        <View style={styles.container}>
            <Header
                leftIcon={require('../images/back.png')}
                title="Student Activity"
                onClickLeftIcon={() => navigation.goBack()}
            />

            <View style={[styles.roundedContainer, { backgroundColor: theme.colors.background }]}>
                <Text>StudentActivity Screen</Text>
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
        padding: 15,
    },
});

export default StudentActivity