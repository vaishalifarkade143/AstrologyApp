
import React, { createContext, useState } from 'react';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

// Merge Paper and Navigation themes for consistency

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...(PaperDefaultTheme?.colors || {}),
    ...(NavigationDefaultTheme?.colors || {}),
  },
};

const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...(PaperDarkTheme?.colors || {}),
    ...(NavigationDarkTheme?.colors || {}),
  },
};

// Create context
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
