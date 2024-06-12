

import * as React from 'react';
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import merge from 'deepmerge';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { PreferencesContext } from './src/context/PreferencesContext';

const checkTheme = (theme) => {
  if (!theme.colors) {
    console.error('Theme colors missing:', theme);
  }
  if (!theme.fonts) {
    console.error('Theme fonts missing:', theme);
  }
  // Add other necessary checks based on what your components expect
};

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

// Check themes
checkTheme(CombinedDefaultTheme);
checkTheme(CombinedDarkTheme);

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PreferencesContext.Provider value={{ toggleTheme, isDarkTheme }}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <DrawerNavigator />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};

export default App;




















// import * as React from 'react';
// import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
// import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
// import merge from 'deepmerge';
// import DrawerNavigator from './src/navigation/DrawerNavigator';
// import { PreferencesContext } from './src/context/PreferencesContext';

// // Define default font styles
// const defaultFonts = {
//   regular: { fontFamily: 'System', fontWeight: 'normal' },
//   medium: { fontFamily: 'System', fontWeight: '500' },
//   light: { fontFamily: 'System', fontWeight: '300' },
//   thin: { fontFamily: 'System', fontWeight: '100' },
// };

// // Function to add default fonts if missing
// const addDefaultFonts = (theme) => {
//   return {
//     ...theme,
//     fonts: theme.fonts || defaultFonts,
//   };
// };

// // Merge themes and add fonts if missing
// const CombinedDefaultTheme = addDefaultFonts(merge(PaperDefaultTheme, NavigationDefaultTheme));
// const CombinedDarkTheme = addDefaultFonts(merge(PaperDarkTheme, NavigationDarkTheme));

// // Function to check theme properties
// const checkTheme = (theme) => {
//   if (!theme.colors) {
//     console.error('Theme colors missing:', theme);
//   }
//   if (!theme.fonts) {
//     console.error('Theme fonts missing:', theme);
//   }
// };

// // Check themes
// checkTheme(CombinedDefaultTheme);
// checkTheme(CombinedDarkTheme);

// const App = () => {
//   const [isDarkTheme, setIsDarkTheme] = React.useState(false);

//   const toggleTheme = () => {
//     setIsDarkTheme(!isDarkTheme);
//   };

//   const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

//   return (
//     <PreferencesContext.Provider value={{ toggleTheme, isDarkTheme }}>
//       <PaperProvider theme={theme}>
//         <NavigationContainer theme={theme}>
//           <DrawerNavigator />
//         </NavigationContainer>
//       </PaperProvider>
//     </PreferencesContext.Provider>
//   );
// };

// export default App;
