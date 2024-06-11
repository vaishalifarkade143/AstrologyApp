
// import * as React from 'react';
// import { Appbar, useTheme, TextInput } from 'react-native-paper';
// import { StyleSheet, View } from 'react-native';

// const CustomAppbar = ({ navigation, title, subtitle }) => {
//   const theme = useTheme();
//   const [searchQuery, setSearchQuery] = React.useState('');
//   const [isSearching, setIsSearching] = React.useState(false);

//   const handleSearchToggle = () => {
//     setIsSearching(!isSearching);
//   };

//   const handleSearchChange = (query) => {
//     setSearchQuery(query);
//   };

//   const handleSearchClear = () => {
//     setSearchQuery('');
//     setIsSearching(false);
//   };

//   return (
//     <Appbar.Header>
//       {isSearching ? (
//         <View style={styles.searchContainer}>
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search..."
//             placeholderTextColor={theme.colors.text}
//             value={searchQuery}
//             onChangeText={handleSearchChange}
//             autoFocus
//             right={
//               searchQuery ? (
//                 <TextInput.Icon
//                   name="close"
//                   onPress={() => setSearchQuery('')}
//                   color={theme.colors.text}
//                 />
//               ) : null
//             }
//           />
//           <Appbar.Action 
//             icon="close" 
//             onPress={handleSearchClear} 
//             color={theme.colors.text} 
//           />
//         </View>
//       ) : (
//         <>
//           <Appbar.Action 
//             icon="menu" 
//             onPress={() => navigation.openDrawer()} 
//             color={theme.colors.text}
//           />
//           <Appbar.Content 
//             title={title} 
//             subtitle={subtitle} 
//             titleStyle={{ color: theme.colors.text }}
//             subtitleStyle={{ color: theme.colors.text }}
//           />
//           <Appbar.Action 
//             icon="magnify" 
//             onPress={handleSearchToggle} 
//             color={theme.colors.text}
//           />
//           <Appbar.Action 
//             icon="dots-vertical" 
//             onPress={() => {}} 
//             color={theme.colors.text}
//           />
//         </>
//       )}
//     </Appbar.Header>
//   );
// };

// const styles = StyleSheet.create({
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     backgroundColor: 'transparent',
//     color: '#fff',
//   },
// });

// export default CustomAppbar;








import * as React from 'react';
import { Appbar, Searchbar, useTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const CustomAppbar = ({ navigation, title, subtitle }) => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isSearching, setIsSearching] = React.useState(false);

  const handleSearchToggle = () => {
    setIsSearching(!isSearching);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleSearchClear = () => {
    setSearchQuery('');
    setIsSearching(false);
  };

  return (
    <Appbar.Header>
      {isSearching ? (
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search..."
            placeholderTextColor={theme.colors.placeholder}
            onChangeText={handleSearchChange}
            value={searchQuery}
            autoFocus
            iconColor={theme.colors.text}
            onIconPress={handleSearchClear}
            style={[styles.searchInput, { backgroundColor: theme.colors.background, color: theme.colors.text }]}
          />
          <Appbar.Action 
            icon="close" 
            onPress={handleSearchClear} 
            color={theme.colors.text} 
          />
        </View>
      ) : (
        <>
          <Appbar.Action 
            icon="menu" 
            onPress={() => navigation.openDrawer()} 
            color={theme.colors.text}
          />
          <Appbar.Content 
            title={title} 
            subtitle={subtitle} 
            titleStyle={{ color: theme.colors.text }}
            subtitleStyle={{ color: theme.colors.text }}
          />
          <Appbar.Action 
            icon="magnify" 
            onPress={handleSearchToggle} 
            color={theme.colors.text}
          />
          <Appbar.Action 
            icon="dots-vertical" 
            onPress={() => {}} 
            color={theme.colors.text}
          />
        </>
      )}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
  },
});

export default CustomAppbar;
