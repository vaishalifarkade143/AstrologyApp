

// import * as React from 'react';
// import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
// import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
// import merge from 'deepmerge';
// import DrawerNavigator from './src/navigation/DrawerNavigator';
// import { PreferencesContext } from './src/context/PreferencesContext';
// import StackNavigator from './src/navigation/StackNavigator';

// const checkTheme = (theme) => {
//   if (!theme.colors) {
//     console.error('Theme colors missing:', theme);
//   }
//   if (!theme.fonts) {
//     console.error('Theme fonts missing:', theme);
//   }
//   // Add other necessary checks based on what your components expect
// };

// const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
// const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

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
//           <StackNavigator/>
//         </NavigationContainer>
//       </PaperProvider>
//     </PreferencesContext.Provider>
//   );
// };

// export default App;














import React from 'react';
import { PreferencesProvider } from './src/components/PreferencesContext';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <PreferencesProvider>
      <PaperProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesProvider>
  );
};

export default App;

