import React, { useContext,useEffect ,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
// import { PreferencesContext } from './src/context/PreferencesContext'; // Import your context
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigator from './AppNavigator';
import StackNavigator from './StackNavigator';
import { PreferencesContext } from '../context/PreferencesContext';


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
      <NavigationContainer theme={theme} >
        {isLoggedIn ? <AppNavigator/> : <StackNavigator />}
      </NavigationContainer>
    </PaperProvider>
  );
};
export default AppContent;







//using context api
// import React, { useContext,useEffect ,useState} from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { Provider as PaperProvider } from 'react-native-paper';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import AppNavigator from './AppNavigator';
// import StackNavigator from './StackNavigator';
// import { PreferencesContext } from '../context/PreferencesContext';
// import { AuthProvider } from '../context/AuthContext';
//  import { AuthContext } from '../context/AuthContext';

// const AppContent = () => {
//   const { theme } = useContext(PreferencesContext);
//   const { userToken } = useContext(AuthContext);
//   const [isLoggedIn, setIsLoggedIn] = useState(null);
//  useEffect(() => {
//   const checkLoginStatus = async () => {
//     const status = await AsyncStorage.getItem('isLoggedIn');
//     setIsLoggedIn(status === 'true');
//   };
//   checkLoginStatus();
// }, []);
//   if (!theme || !theme.colors) {
//     return null; 
//   }
// if (isLoggedIn === null) {
//   return null;
// }
//   return (
//     <PaperProvider theme={theme}>
//       <NavigationContainer theme={theme} >
//         {userToken?<AppNavigator/>:<StackNavigator/>}
//       </NavigationContainer>
//     </PaperProvider>
//   );
// };
// export default AppContent;