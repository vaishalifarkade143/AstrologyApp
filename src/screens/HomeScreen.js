// import React from 'react';
// import { View, Text, StyleSheet, Dimensions, Image, FlatList } from 'react-native';
// import { Button } from 'react-native-paper';
// import CustomAppbar from '../components/CustomAppbar';
// import Carousel from 'react-native-reanimated-carousel';

// const { width: viewportWidth } = Dimensions.get('window');

// const HomeScreen = ({ navigation }) => {

//   const data = [
//     {
//       title: "Aenean leo",
//       body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
//       imgUrl: "https://picsum.photos/id/11/200/300",
//     },
//     {
//       title: "In turpis",
//       body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis.",
//       imgUrl: "https://picsum.photos/id/10/200/300",
//     },
//     {
//       title: "Lorem Ipsum",
//       body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
//       imgUrl: "https://picsum.photos/id/12/200/300",
//     },
//   ];

//   const flatListData = [
//     { id: '1', name: 'Item 1', imgUrl: 'https://picsum.photos/id/13/200/200' },
//     { id: '2', name: 'Item 2', imgUrl: 'https://picsum.photos/id/14/200/200' },
//     { id: '3', name: 'Item 3', imgUrl: 'https://picsum.photos/id/15/200/200' },
//     { id: '4', name: 'Item 4', imgUrl: 'https://picsum.photos/id/16/200/200' },
//     { id: '5', name: 'Item 5', imgUrl: 'https://picsum.photos/id/17/200/200' },
//     { id: '6', name: 'Item 6', imgUrl: 'https://picsum.photos/id/18/200/200' },
//     { id: '7', name: 'Item 7', imgUrl: 'https://picsum.photos/id/19/200/200' },
//     { id: '8', name: 'Item 8', imgUrl: 'https://picsum.photos/id/20/200/200' },
//     { id: '9', name: 'Item 9', imgUrl: 'https://picsum.photos/id/21/200/200' },
//     { id: '10', name: 'Item 10', imgUrl: 'https://picsum.photos/id/22/200/200' },
//   ];

//   const renderItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Image source={{ uri: item.imgUrl }} style={styles.itemImg} />
//       <Text style={styles.itemTitle}>{item.title}</Text>
//       <Text style={styles.itemBody}>{item.body}</Text>
//     </View>
//   );
//   const renderFlatListItem = ({ item }) => (
//     <View style={styles.flatListItemContainer}>
//       <Image source={{ uri: item.imgUrl }} style={styles.flatListItemImg} />
//       <Text style={styles.flatListItemText}>{item.name}</Text>
//     </View>
//   );

//   return (
//     <>
//       <CustomAppbar navigation={navigation} title="Home" subtitle="Subtitle" />
//       <View style={styles.container}>

//         <Carousel
//           loop
//           width={viewportWidth}
//           height={400}
//           autoPlay={true}
//           data={data}
//           scrollAnimationDuration={1000}
//           renderItem={renderItem}
//         />

//         <FlatList
//           data={flatListData}
//           renderItem={renderFlatListItem}
//           horizontal={true}
//           keyExtractor={(item) => item.id}
//           style={styles.flatList}
//         />

//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#efefef'
//   },

//   text: {
//     marginBottom: 20,
//     fontSize: 18,
//   },

//   itemContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 350,
//   },
//   itemImg: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     marginBottom: 10,
//   },
//   itemTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   itemBody: {
//     fontSize: 15,
//     textAlign: 'center',
//   },
//   flatList: {
//     marginTop: 150,

//   },
//   flatListItemContainer: {
//     backgroundColor: '#fff',
//     padding: 15,
//     marginVertical: 5,
//     marginHorizontal: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//     height:150
//   },
//   flatListItemImg: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   flatListItemText: {
//     fontSize: 18,
//   },

// });

// export default HomeScreen;










import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import CustomAppbar from '../components/CustomAppbar';
import Carousel from 'react-native-reanimated-carousel';

const { width: viewportWidth } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();

  const data = [
    {
      title: "Aenean leo",
      body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "In turpis",
      body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis.",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "Lorem Ipsum",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
  ];

  const flatListData = [
    { id: '1', name: 'Item 1', imgUrl: 'https://picsum.photos/id/13/200/200' },
    { id: '2', name: 'Item 2', imgUrl: 'https://picsum.photos/id/14/200/200' },
    { id: '3', name: 'Item 3', imgUrl: 'https://picsum.photos/id/15/200/200' },
    { id: '4', name: 'Item 4', imgUrl: 'https://picsum.photos/id/16/200/200' },
    { id: '5', name: 'Item 5', imgUrl: 'https://picsum.photos/id/17/200/200' },
    { id: '6', name: 'Item 6', imgUrl: 'https://picsum.photos/id/18/200/200' },
    { id: '7', name: 'Item 7', imgUrl: 'https://picsum.photos/id/19/200/200' },
    { id: '8', name: 'Item 8', imgUrl: 'https://picsum.photos/id/20/200/200' },
    { id: '9', name: 'Item 9', imgUrl: 'https://picsum.photos/id/21/200/200' },
    { id: '10', name: 'Item 10', imgUrl: 'https://picsum.photos/id/22/200/200' },
  ];

  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer, { backgroundColor: theme.colors.surface }]}>
      <Image source={{ uri: item.imgUrl }} style={styles.itemImg} />
      <Text style={[styles.itemTitle, { color: theme.colors.text }]}>{item.title}</Text>
      <Text style={[styles.itemBody, { color: theme.colors.text }]}>{item.body}</Text>
    </View>
  );

  const renderFlatListItem = ({ item }) => (
    <View style={[styles.flatListItemContainer, { backgroundColor: theme.colors.surface }]}>
      <Image source={{ uri: item.imgUrl }} style={styles.flatListItemImg} />
      <Text style={[styles.flatListItemText, { color: theme.colors.text }]}>{item.name}</Text>
    </View>
  );

  return (
    <>
      <CustomAppbar navigation={navigation} title="Home" subtitle="Subtitle" />
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Carousel
          loop
          width={viewportWidth}
          height={400}
          autoPlay={true}
          data={data}
          scrollAnimationDuration={1000}
          renderItem={renderItem}
        />
        <FlatList
          data={flatListData}
          renderItem={renderFlatListItem}
          horizontal={true}
          keyExtractor={(item) => item.id}
          style={styles.flatList}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 350,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  itemImg: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemBody: {
    fontSize: 15,
    textAlign: 'center',
  },
  flatList: {
    marginTop: 200,
  },
  flatListItemContainer: {
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 100,
  },
  flatListItemImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  flatListItemText: {
    fontSize: 18,
  },
});

export default HomeScreen;


