
import React, { useContext,useEffect ,useState} from 'react';
import { PreferencesProvider } from './src/context/PreferencesContext';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import StackNavigator from './src/navigation/StackNavigator';
import { PreferencesContext } from './src/context/PreferencesContext'; // Import your context
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './src/screens/HomeScreen';


const AppContent = () => {
  const { theme } = useContext(PreferencesContext);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
 
 // Check if the user is already logged in on app load
 useEffect(() => {
  const checkLoginStatus = async () => {
    const status = await AsyncStorage.getItem('isLoggedIn');
    setIsLoggedIn(status === 'true');
  };
  checkLoginStatus();
}, []);


  if (!theme || !theme.colors) {
    console.error('Theme is not properly initialized');
    return null; // Return null to avoid rendering until theme is defined
  }

// Show loading screen until we determine login status
if (isLoggedIn === null) {
  return null;
}


  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {/* <StackNavigator /> */}
        {isLoggedIn ? <HomeScreen /> : <StackNavigator />}
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

