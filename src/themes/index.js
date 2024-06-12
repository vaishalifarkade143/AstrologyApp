// src/themes/index.js
import { DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import merge from 'deepmerge';

const defaultFonts = {
  regular: { fontFamily: 'System', fontWeight: 'normal' },
  medium: { fontFamily: 'System', fontWeight: '500' },
  light: { fontFamily: 'System', fontWeight: '300' },
  thin: { fontFamily: 'System', fontWeight: '100' },
};

const addDefaultFonts = (theme) => ({
  ...theme,
  fonts: {
    ...defaultFonts,
    ...theme.fonts,
  },
});

const CombinedDefaultTheme = addDefaultFonts(merge(PaperDefaultTheme, NavigationDefaultTheme));
const CombinedDarkTheme = addDefaultFonts(merge(PaperDarkTheme, NavigationDarkTheme));

export { CombinedDefaultTheme, CombinedDarkTheme };
