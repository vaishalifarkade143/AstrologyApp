
import React, { useContext } from 'react';
import { PreferencesProvider } from './src/context/PreferencesContext';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import StackNavigator from './src/navigation/StackNavigator';
import { PreferencesContext } from './src/context/PreferencesContext'; // Import your context
const AppContent = () => {
  const { theme } = useContext(PreferencesContext);
  if (!theme || !theme.colors) {
    console.error('Theme is not properly initialized');
    return null; // Return null to avoid rendering until theme is defined
  }


  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <StackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

const App = () => (
  <PreferencesProvider>
    <AppContent />
  </PreferencesProvider>
);

export default App;

