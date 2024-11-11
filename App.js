

//using context api
// import React from 'react';
// import { PreferencesProvider } from './src/context/PreferencesContext';
// import AppContent from './src/navigation/AppContent';
// import { AuthProvider } from './src/context/AuthContext';
// const App = () => (
//   <PreferencesProvider>
//     <AuthProvider>
//       <AppContent />
//     </AuthProvider>
//   </PreferencesProvider>
// );
// export default App;


import React from 'react';
import { PreferencesProvider } from './src/context/PreferencesContext';
import AppContent from './src/navigation/AppContent';
import { AuthProvider } from './src/context/AuthContext';
const App = () => (
  <PreferencesProvider>
    <AppContent />
  </PreferencesProvider>
);
export default App;
