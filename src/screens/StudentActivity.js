import React, { useContext, useRef, useState } from 'react';
import {
    View, StyleSheet, TextInput, TouchableOpacity,
    ImageBackground, Text, Animated, Dimensions,
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

    // Handle Search Input
    const handleSearch = (text) => {
        setSearchQuery(text);
        // Add additional search logic if necessary
    };

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

    // Render the appropriate content based on selected option
    const renderContent = () => {
        if (!selectedOption) return null; // Guard against undefined state
        switch (selectedOption) {
            case 'Home Work':
                return <Text>Content for Homework</Text>;
            case 'Class Work':
                return <Text>Content for Classwork</Text>;
            default:
                return null;
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

    return (
        <View style={styles.container}>
            {/* Header */}
            <Header
                leftIcon={require('../images/back.png')}
                title="Student Activity"
                onClickLeftIcon={() => navigation.goBack()}
            />

            {/* Search Bar */}
            <View style={[styles.searchContainer, { backgroundColor: theme.colors.background }]}>
                <TextInput
                    style={[styles.searchInput, { backgroundColor: theme.colors.card }]}
                    placeholder="Search"
                    placeholderTextColor={colors.placeholder}
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>

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
                                item.customStyle, // Apply specific border radius styles
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
                {/* Content Area */}
                <View style={styles.contentContainer}>
                    {renderContent()}
                </View>
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
    searchContainer: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 12,
        marginTop: -5,
    },
    searchInput: {
        borderRadius: 10,
        padding: 8,
        fontSize: 16,
        color: colors.text,
        borderWidth: 1,
        borderColor: colors.lightGray,
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
        marginLeft: -15,
    },
    dividerView: {
        marginTop: -50,
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
        paddingHorizontal: 20,
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
        marginHorizontal: 5,
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
        marginLeft: 10,
    },
    contentContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    icon: {
        marginRight: 5,
        padding:5,
    },
    homeworkButton: {
        paddingLeft:10,
        paddingRight:10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    classworkButton: {
        paddingRight:10,
        paddingLeft:10,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
});

export default StudentActivity;
