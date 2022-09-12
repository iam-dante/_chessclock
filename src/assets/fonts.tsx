import {StyleSheet} from 'react-native';

/**
 * Used font styles
 */
const BOLD_FONT = 'DMSans-Bold';
// const SEMI_FONT = 'PublicSans-SemiBold';
const BASE_FONT = 'DMSans-Regular';
const BASE_MED = 'DMSans-Medium';

// Building fonts for the app
export const Font = StyleSheet.create({
  baseStyle: {
    fontFamily: BASE_FONT,
    color: '#000000',
    letterSpacing: 2,
  },
  displayStyle: {
    fontSize: 18,
    fontFamily: BASE_FONT,
    color: '#000000',
    letterSpacing: 2,
  },
});

// Building fonts for the app
export const FontStyle = StyleSheet.create({
  bold: {
    fontFamily: BOLD_FONT,
  },
  regular: {
    fontFamily: BASE_FONT,
  },

  meduim: {
    fontFamily: BASE_MED,
  },
});
