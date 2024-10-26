import React, { createContext, useState } from 'react';
import merge from 'deepmerge';
import { DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

// Merge the themes
const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

// Create Preferences Context
export const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PreferencesContext.Provider value={{ toggleTheme, isDarkTheme, theme }}>
      {children}
    </PreferencesContext.Provider>
  );
};
