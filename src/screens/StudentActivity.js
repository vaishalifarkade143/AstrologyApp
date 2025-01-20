
import React, { useContext, useRef, useState } from 'react';
import {
    View, StyleSheet, TextInput, TouchableOpacity,
    ImageBackground, Text, Animated, Dimensions,
    FlatList,
} from 'react-native';
import { CalendarList } from 'react-native-calendars';
import colors from '../styles/colors';
import Header from '../common/Header';
import { PreferencesContext } from '../context/PreferencesContext';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get("window");

const StudentActivity = ({ navigation }) => {
    const { theme } = useContext(PreferencesContext);
    const [searchQuery, setSearchQuery] = useState('');
    const calendarRef = useRef(null); // Ref for CalendarList
    const [currentDate, setCurrentDate] = useState(moment());
    const [selectedOption, setSelectedOption] = useState('Home Work');
    const buttonWidth = width / 4; // Adjusted for two buttons
    const translateX = useRef(new Animated.Value(0)).current;

    // Dummy data for Homework and Classwork
    const homeworkData = [
        { id: '1', title: 'Math Assignment' },
        { id: '2', title: 'Science Project' },
        { id: '3', title: 'History Essay' },
        { id: '4', title: 'Math Assignment' },
        { id: '5', title: 'Science Project' },
        { id: '6', title: 'History Essay' },
    ];

    const classworkData = [
        { id: '1', title: 'Math Classwork' },
        { id: '2', title: 'English Notes' },
        { id: '3', title: 'Physics Exercises' },
        { id: '4', title: 'Math Assignment' },
        { id: '5', title: 'Science Project' },
        { id: '6', title: 'History Essay' },
    ];

    // Handle Search Input
    const handleSearch = (text) => {
        setSearchQuery(text);
    };

    // Filtered data based on selected option
    const filteredData =
        selectedOption === 'Home Work'
            ? homeworkData.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
            : classworkData.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

    // Update the Calendar Month
    const handleMonthChange = (direction) => {
        const newDate =
            direction === 'prev'
                ? moment(currentDate).subtract(1, 'month')
                : moment(currentDate).add(1, 'month');
        setCurrentDate(newDate);
        calendarRef.current?.scrollToMonth(newDate.format('YYYY-MM-DD'));
    };

    // Update Header on Visible Month Change
    const handleVisibleMonthsChange = (months) => {
        if (months && months.length > 0) {
            const visibleMonth = months[0].dateString;
            setCurrentDate(moment(visibleMonth));
        }
    };

    // Handle Button Press (with Animation)
    const handleButtonPress = (option, index) => {
        setSelectedOption(option);
        Animated.spring(translateX, {
            toValue: index * buttonWidth, // Calculate based on index
            useNativeDriver: true,
        }).start();
    };

    // Render a single FlatList item
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <Header
                leftIcon={require('../images/back.png')}
                title="Student Activity"
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

            {/* Main Content */}
            <View style={[styles.roundedContainer, { backgroundColor: theme.colors.background }]}>
                {/* Calendar Header with Image */}
                <ImageBackground
                    source={require('../images/paidfee.jpg')}
                    style={styles.calendarHeaderBackground}
                >
                    <View style={styles.calendarHeader}>
                        <TouchableOpacity onPress={() => handleMonthChange('prev')}>
                            <Text style={styles.arrow}>{"<"}</Text>
                        </TouchableOpacity>
                        <Text style={styles.monthText}>{currentDate.format('MMMM YYYY')}</Text>
                        <TouchableOpacity onPress={() => handleMonthChange('next')}>
                            <Text style={styles.arrow}>{">"}</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

                {/* Calendar */}
                <View style={styles.calendarContainer}>
                    <CalendarList
                        ref={calendarRef}
                        horizontal
                        pagingEnabled
                        renderHeader={() => null}
                        onVisibleMonthsChange={handleVisibleMonthsChange}
                        calendarWidth={width}
                        onMonthChange={(date) => setCurrentDate(moment(date.dateString))}
                        theme={{
                            backgroundColor: theme.colors.background,
                            calendarBackground: theme.colors.background,
                            textSectionTitleColor: colors.coloruse,
                            selectedDayBackgroundColor: colors.primary,
                            selectedDayTextColor: colors.white,
                            todayTextColor: colors.coloruse,
                            dayTextColor: colors.black,
                        }}
                    />
                </View>

                {/* Divider */}
                <View style={styles.dividerView} />

                {/* Option Buttons */}
                <View style={styles.optionContainer}>
                    <Animated.View
                        style={[
                            styles.slider,
                            {
                                transform: [{ translateX }], // Animate sliding effect
                                width: buttonWidth,
                            },
                        ]}
                    />
                    {[
                        { option: 'Home Work', icon: 'book', customStyle: styles.homeworkButton },
                        { option: 'Class Work', icon: 'pencil', customStyle: styles.classworkButton },
                    ].map((item, index) => (
                        <TouchableOpacity
                            key={item.option}
                            style={[
                                styles.button,
                                item.customStyle,
                                selectedOption === item.option
                                    ? styles.selectedButton
                                    : styles.unselectedButton,
                            ]}
                            onPress={() => handleButtonPress(item.option, index)}
                        >
                            <FontAwesome
                                name={item.icon}
                                size={20}
                                color={selectedOption === item.option ? colors.white : colors.coloruse}
                                style={styles.icon}
                            />
                            <Text
                                style={
                                    selectedOption === item.option
                                        ? styles.selectedButtonText
                                        : styles.unselectedButtonText
                                }
                            >
                                {item.option}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Content Area (FlatList) */}
                <FlatList
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.flatListContainer}
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
        marginTop: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // padding: 15,
        overflow: 'hidden',
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
    calendarHeaderBackground: {
        width: "100%",
        height: Dimensions.get('window').height * 0.1,
        justifyContent: 'center',
        marginTop: -12,
    },
    calendarHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        paddingHorizontal: 10,
        marginLeft:14
    },
    arrow: {
        fontSize: 24,
        color: colors.coloruse,
    },
    monthText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.white,
    },
    calendarContainer: {
        width: Dimensions.get('window').width,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray,
    },
    dividerView: {
        marginTop: -40,
        height: 0.75,
        backgroundColor: colors.placeholder,
        alignSelf: 'center',
        width: Dimensions.get('window').width * 0.93,
        marginBottom: 10,
    },
    optionContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
        paddingHorizontal: 10,
    },
    slider: {
        position: 'absolute',
        height: 40,
        backgroundColor: colors.coloruse,
        borderRadius: 20,
    },
    button: {
        width: width / 3,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
    },
    selectedButton: {
        backgroundColor: colors.coloruse,
    },
    unselectedButton: {
        backgroundColor: colors.backgroundlight,
    },
    selectedButtonText: {
        color: "#ffffff",
        fontWeight: 'bold',
        marginLeft: 10,
    },
    unselectedButtonText: {
        color: colors.coloruse,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    flatListContainer: {
        paddingTop: 10,
    },
    itemContainer: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: colors.backgroundlight,
        borderRadius: 10,
        margin:10
    },
    itemTitle: {
        fontSize: 16,
        color: colors.text,
    },
});

export default StudentActivity;
