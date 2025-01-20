
// import React, { useContext, useState } from 'react';
// import {
//     View,
//     StyleSheet,
//     TouchableOpacity,
//     Text,
//     Dimensions,
//     TextInput,
//     Modal,
//     ActivityIndicator,
// } from 'react-native';
// import Pdf from 'react-native-pdf'; // Ensure this library is installed
// import colors from '../styles/colors';
// import Header from '../common/Header';
// import { PreferencesContext } from '../context/PreferencesContext';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Entypo from 'react-native-vector-icons/Entypo';

// const EcampusCircular = ({ navigation }) => {
//     const { theme } = useContext(PreferencesContext);
//     const [isExpanded, setIsExpanded] = useState(false);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [isDownloading, setIsDownloading] = useState(false);
//     const [isModalVisible, setIsModalVisible] = useState(false);

//     // Toggle the modal
//     const toggleModal = () => {
//         setIsModalVisible((prev) => !prev);
//     };

//     // Handle Search Input
//     const handleSearch = (text) => {
//         setSearchQuery(text);
//     };

//     // Handle PDF Download
//     const handleDownload = async () => {
//         try {
//             setIsDownloading(true);
//             // Simulate download delay for demonstration purposes
//             setTimeout(() => {
//                 alert('PDF downloaded successfully!');
//                 setIsDownloading(false);
//             }, 2000);
//         } catch (error) {
//             console.log('Download Error:', error);
//             setIsDownloading(false);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Header
//                 leftIcon={require('../images/back.png')}
//                 title="Ecampus Circular"
//                 onClickLeftIcon={() => navigation.goBack()}
//             />

//             <TextInput
//                 style={[styles.searchInput, { backgroundColor: theme.colors.card }]}
//                 placeholder="Search"
//                 placeholderTextColor={colors.placeholder}
//                 value={searchQuery}
//                 onChangeText={handleSearch}
//             />

//             <View style={[styles.roundedContainer, { backgroundColor: theme.colors.background }]}>
//                 <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)} style={styles.Ecampus}>
//                     <View style={styles.Ecampusview}>
//                         <Text style={styles.EcampusText}>Ecampus Circular</Text>
//                         <AntDesign
//                             name={isExpanded ? 'down' : 'up'}
//                             size={18}
//                             style={styles.icon}
//                         />
//                     </View>

//                     {isExpanded && (
//                         <>
//                             <View style={[styles.dividerView, { width: Dimensions.get('window').width * 0.85 }]} />
//                             <View style={styles.expandedContent}>
//                                 <Text style={styles.expandedDate}>15th January 2025</Text>
//                                 <Text style={styles.expandedText}>
//                                     Please refer to the latest circular for more details.
//                                 </Text>
//                                 <View style={[styles.dividerView, { width: Dimensions.get('window').width * 0.7 }]} />
//                                 <TouchableOpacity style={styles.attachmentButton} onPress={toggleModal}>
//                                     <Entypo name="attachment" size={20} style={styles.attachmentIcon} />
//                                     <Text style={styles.attachmentText}>View Attachment</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </>
//                     )}
//                 </TouchableOpacity>
//             </View>

//             <Modal
//                 visible={isModalVisible}
//                 animationType="slide"
//                 transparent={true}
//                 onRequestClose={toggleModal}
//             >
//                 <View style={styles.modalContainer}>
//                     <View style={styles.modalContent}>
//                         <View style={styles.modalrow} >
//                             <Text style={styles.downloadButtonText}>Attachment</Text>
//                             <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
//                                 <AntDesign name="close" size={24} color="#fff"/>
//                             </TouchableOpacity>
//                         </View>
//                         <View style={styles.modalrow1}>
//                         <Text style={styles.downloadButtonText1}>Pdf name</Text> 
//                         <Pdf
//                             source={{ uri: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' }}
//                             // style={styles.pdf}
//                             onError={(error) => {
//                                 console.log('PDF Error:', error);
//                             }}
//                         />
//                          <TouchableOpacity
//                             style={styles.downloadButton}
//                             onPress={handleDownload}
//                             disabled={isDownloading}
//                         >
//                             {isDownloading ? (
//                                 <ActivityIndicator color="#fff" />
//                             ) : (
//                                 <Entypo name="download" size={24} color="#0e6655" />
//                             )}
//                         </TouchableOpacity>
//                         </View>



//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.coloruse,
//     },
//     roundedContainer: {
//         flex: 1,
//         marginTop: 5,
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         overflow: 'hidden',
//     },
//     searchInput: {
//         borderRadius: 10,
//         padding: 8,
//         fontSize: 16,
//         color: colors.text,
//         borderWidth: 1,
//         borderColor: colors.lightGray,
//         marginLeft: 10,
//         marginRight: 10,
//     },
//     Ecampus: {
//         padding: 12,
//         borderRadius: 10,
//         borderColor: colors.coloruse,
//         borderWidth: 1,
//         marginHorizontal: 12,
//         marginVertical: 10,
//         backgroundColor: colors.backgroundlight,
//     },
//     Ecampusview: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     EcampusText: {
//         fontSize: 17,
//         color: colors.coloruse,
//         fontWeight: '500',
//     },
//     icon: {
//         color: colors.coloruse,
//     },
//     expandedContent: {
//         marginTop: 13,
//         padding: 10,
//         borderRadius: 10,
//         borderColor: colors.coloruse,
//         borderWidth: 1,
//         backgroundColor: '#ffffff',
//     },
//     expandedText: {
//         fontSize: 14,
//         fontWeight: '500',
//         color: colors.text,
//         marginBottom: 7,
//     },
//     expandedDate: {
//         fontSize: 15,
//         fontWeight: '500',
//         color: colors.coloruse,
//         marginBottom: 5,
//     },
//     attachmentButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 5,
//         borderRadius: 8,
//     },
//     attachmentIcon: {
//         color: colors.coloruse,
//         marginRight: 8,
//     },
//     attachmentText: {
//         color: '#000',
//         fontWeight: '600',
//     },
//     dividerView: {
//         height: 1,
//         backgroundColor: colors.placeholder,
//         alignSelf: 'center',
//         marginTop: 10,
//     },
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     modalContent: {
//         width: '90%',
//         height: '18%',
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         borderTopLeftRadius: 10,
//         borderTopRightRadius: 10,
//         // padding: 10,
//     },
//     modalrow: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         backgroundColor: colors.coloruse,
//         padding: 8,
//         borderTopLeftRadius: 10,
//         borderTopRightRadius: 10,
//     },
//     modalrow1: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         backgroundColor: colors.backgroundlight,
//         padding: 10,
//         borderRadius: 10,
//         marginHorizontal:10,
//         marginVertical:10,
//         borderWidth:1,
//         borderColor:colors.coloruse
//     },
//     closeButton: {
//         alignSelf: 'flex-end',
//         marginBottom: 6,
//     },
//     // pdf: {

//     //     width: '20%',
//     // },
//     downloadButton: {
//         // backgroundColor: colors.coloruse,
//         // padding: 10,
//         borderRadius: 8,
//         alignItems: 'center',
//     },
//     downloadButtonText: {
//         color: '#fff',
//         fontWeight: '600',
//         fontSize: 15,
//     },
//     downloadButtonText1: {
//         color: colors.text,
//         fontSize: 13,
//     },
// });

// export default EcampusCircular;















import React, { useContext, useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Dimensions,
    TextInput,
    Modal,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import Pdf from 'react-native-pdf'; // Ensure this library is installed
import colors from '../styles/colors';
import Header from '../common/Header';
import { PreferencesContext } from '../context/PreferencesContext';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const EcampusCircular = ({ navigation }) => {
    const { theme } = useContext(PreferencesContext);
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isDownloading, setIsDownloading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCircular, setSelectedCircular] = useState(null);
    const [expandedItemId, setExpandedItemId] = useState(null);

    // Example data for the FlatList
    const circularData = [
        { id: '1', title: 'Ecampus Circular 1', date: '15th January 2025', pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
        { id: '2', title: 'Ecampus Circular 2', date: '10th January 2025', pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
        { id: '3', title: 'Ecampus Circular 3', date: '5th January 2025', pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
    ];
    // Toggle the modal
    const toggleModal = () => {
        setSelectedCircular(selectedCircular);
        setIsModalVisible((prev) => !prev);
    };

    // Handle Search Input
    const handleSearch = (text) => {
        setSearchQuery(text);
    };

    // Handle PDF Download
    const handleDownload = async () => {
        try {
            setIsDownloading(true);
            // Simulate download delay for demonstration purposes
            setTimeout(() => {
                alert('PDF downloaded successfully!');
                setIsDownloading(false);
            }, 2000);
        } catch (error) {
            console.log('Download Error:', error);
            setIsDownloading(false);
        }
    };

    const toggleExpand = (id) => {
        // Expand the clicked item or collapse it if already expanded
        setExpandedItemId((prevId) => (prevId === id ? null : id));
    };
    // Render each circular in the FlatList
    const renderCircular = ({ item }) => (
        <TouchableOpacity 
        onPress={() => setIsExpanded(!isExpanded)} 
        style={styles.Ecampus}>
            <View style={styles.Ecampusview}>
                <Text style={styles.EcampusText}>15th January 2025</Text>
                <AntDesign
                    name={isExpanded ? 'down' : 'up'}
                    size={18}
                    style={styles.icon}
                />
            </View>

            {isExpanded && (
                <>
                    <View style={[styles.dividerView, { width: Dimensions.get('window').width * 0.85 }]} />
                    <View style={styles.expandedContent}>
                        <Text style={styles.expandedDate}>Heading of circular</Text>
                        <Text style={styles.expandedText}>
                            Please refer to the latest circular for more details.
                        </Text>
                        <View style={[styles.dividerView, { width: Dimensions.get('window').width * 0.7 }]} />
                        <TouchableOpacity style={styles.attachmentButton} onPress={toggleModal}>
                            <Entypo name="attachment" size={20} style={styles.attachmentIcon} />
                            <Text style={styles.attachmentText}>View Attachment</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </TouchableOpacity>
    );


    return (
        <View style={styles.container}>
            <Header
                leftIcon={require('../images/back.png')}
                title="Ecampus Circular"
                onClickLeftIcon={() => navigation.goBack()}
            />

            <TextInput
                style={[styles.searchInput, { backgroundColor: theme.colors.card }]}
                placeholder="Search"
                placeholderTextColor={colors.placeholder}
                value={searchQuery}
                onChangeText={handleSearch}
            />


            <View style={[styles.roundedContainer, { backgroundColor: theme.colors.background }]}>
                <FlatList
                    data={circularData}
                    keyExtractor={(item) => item.id}
                    renderItem={renderCircular}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </View>
            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalrow} >
                            <Text style={styles.downloadButtonText}>Attachment</Text>
                            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
                                <AntDesign name="close" size={24} color="#fff" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalrow1}>
                            <Text style={styles.downloadButtonText1}>Pdf name</Text>
                            <Pdf
                                source={{ uri: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' }}
                                // style={styles.pdf}
                                onError={(error) => {
                                    console.log('PDF Error:', error);
                                }}
                            />
                            <TouchableOpacity
                                style={styles.downloadButton}
                                onPress={handleDownload}
                                disabled={isDownloading}
                            >
                                {isDownloading ? (
                                    <ActivityIndicator color="#fff" />
                                ) : (
                                    <Entypo name="download" size={24} color="#0e6655" />
                                )}
                            </TouchableOpacity>
                        </View>



                    </View>
                </View>
            </Modal>
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
    searchInput: {
        borderRadius: 10,
        padding: 8,
        fontSize: 16,
        color: colors.text,
        borderWidth: 1,
        borderColor: colors.lightGray,
        marginLeft: 10,
        marginRight: 10,
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
        marginTop: 13,
        padding: 10,
        borderRadius: 10,
        borderColor: colors.coloruse,
        borderWidth: 1,
        backgroundColor: '#ffffff',
    },
    expandedText: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.text,
        marginBottom: 7,
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
        justifyContent: 'center',
        padding: 5,
        borderRadius: 8,
    },
    attachmentIcon: {
        color: colors.coloruse,
        marginRight: 8,
    },
    attachmentText: {
        color: '#000',
        fontWeight: '600',
    },
    dividerView: {
        height: 1,
        backgroundColor: colors.placeholder,
        alignSelf: 'center',
        marginTop: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '90%',
        height: '18%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        // padding: 10,
    },
    modalrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.coloruse,
        padding: 8,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modalrow1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.backgroundlight,
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: colors.coloruse
    },
    closeButton: {
        alignSelf: 'flex-end',
        marginBottom: 6,
    },
    // pdf: {

    //     width: '20%',
    // },
    downloadButton: {
        // backgroundColor: colors.coloruse,
        // padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    downloadButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 15,
    },
    downloadButtonText1: {
        color: colors.text,
        fontSize: 13,
    },
});

export default EcampusCircular;








