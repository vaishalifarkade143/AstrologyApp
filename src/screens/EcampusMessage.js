import React, { useContext, useRef, useState } from 'react';
import {
    View, StyleSheet, TouchableOpacity,
    ImageBackground, Text, Dimensions, TextInput
} from 'react-native';
import colors from '../styles/colors';
import Header from '../common/Header';
import { PreferencesContext } from '../context/PreferencesContext';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';


const EcampusMessage = () => {
    const { theme } = useContext(PreferencesContext);
    const [isExpanded, setIsExpanded] = useState(false); // State to toggle expanded view
    const [searchQuery, setSearchQuery] = useState('');
    // Toggles the expanded/collapsed state
    const toggleExpand = () => {
        setIsExpanded((prevState) => !prevState); // Flip the state
    };
    // Handle Search Input
    const handleSearch = (text) => {
        setSearchQuery(text);
    };
    return (
        <View style={styles.container}>
            <Header
                leftIcon={require('../images/back.png')}
                title="Ecampus Message"
                onClickLeftIcon={() => navigation.goBack()}
            />
            {/* Search Bar */}
            {/* <View style={[styles.searchContainer, { backgroundColor: theme.colors.background }]}> */}
                <TextInput
                    style={[styles.searchInput, { backgroundColor: theme.colors.card }]}
                    placeholder="Search"
                    placeholderTextColor={colors.placeholder}
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            {/* </View> */}

            <View style={[styles.roundedContainer, { backgroundColor: theme.colors.background }]}>

                {/* Ecampus Row with Toggle */}
                <TouchableOpacity onPress={toggleExpand} style={styles.Ecampus}>
                    <View style={styles.Ecampusview}>
                        <Text style={styles.EcampusText}>Ecampus Message</Text>
                        <AntDesign
                            name={isExpanded ? 'down' : 'up'} // Toggle icon
                            size={18}
                            style={styles.icon}
                        />
                    </View>

                    {/* Expanded View */}
                    {isExpanded && (
                        <>
                            {/* Divider */}
                            <View style={[styles.dividerView, { width: Dimensions.get('window').width * 0.85, }]} />
                            <View style={styles.expandedContent}>
                                {/* Date and Message */}
                                <Text style={styles.expandedDate}>15th January 2025</Text>
                                <Text style={styles.expandedText}>
                                    Please refer to the latest circular for more details.
                                </Text>
                                <Text style={styles.expandedMessage}>
                                    Please refer to the latest circular for more details.
                                </Text>
                                {/* Divider */}
                                <View style={[styles.dividerView, { width: Dimensions.get('window').width * 0.7, }]} />
                                {/* Attachment Button */}
                                <TouchableOpacity style={styles.attachmentButton}>
                                    <Entypo
                                        name="attachment" // Paperclip icon for attachment
                                        size={20}
                                        style={styles.attachmentIcon}
                                    />
                                    <Text style={styles.attachmentText}>View Attachment</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
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
        overflow: 'hidden', // Ensures children respect the border radius
    },
    searchInput: {
        borderRadius: 10,
        padding: 8,
        fontSize: 16,
        color: colors.text,
        borderWidth: 1,
        borderColor: colors.lightGray,
        marginLeft:10,
        marginRight:10
    },
    Ecampus: {
        padding: 12,
        borderRadius: 10,
        borderColor: colors.coloruse,
        borderWidth: 1,
        marginHorizontal: 12,
        marginVertical: 10,
        backgroundColor: colors.backgroundlight,
    },
    Ecampusview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    EcampusText: {
        fontSize: 17,
        color: colors.coloruse,
        fontWeight: '500',
    },
    icon: {
        color: colors.coloruse,
    },
    expandedContent: {
        // marginHorizontal:0,
        marginTop: 13,
        padding: 10,
        borderRadius: 10,
        borderColor: colors.coloruse,
        borderWidth: 1,
        backgroundColor: colors.backgroundlight,
    },
    expandedText: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.text,
        marginBottom: 7,
    },
    expandedMessage: {
        fontSize: 12,
        // color: colors.coloruse,
        marginBottom: 2,
    },
    expandedDate: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.coloruse,
        marginBottom: 5,
    },
    attachmentButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        padding: 5,
        borderRadius: 8,
    },
    attachmentIcon: {
        color: colors.coloruse,
        marginRight: 8,
    },
    attachmentText: {
        color: '#fff',
        fontWeight: '600',
        color: "#000000"
    },
    dividerView: {
        height: 1,
        backgroundColor: colors.placeholder,
        alignSelf: 'center',
        marginTop: 10,

    },
});

export default EcampusMessage