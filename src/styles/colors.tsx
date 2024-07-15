import {Appearance} from 'react-native';
const colorScheme = Appearance.getColorScheme();

export const colors =
  colorScheme === 'light'
    ? {
        pink: '#FF5D73',
        darkPink: '#A94859',
        text: '#B9B9B9',
        inactiveText: '#cccccc',
        inactiveIcon: '#B9B9B9',
        backgroundScreens: '#595959',
        background: '#494949',
        sectionBackground: '#3C3C3C',
      }
    : {
        pink: '#FF5D73',
        darkPink: '#A94859',
        text: '#B9B9B9',
        inactiveText: '#cccccc',
        inactiveIcon: '#B9B9B9',
        backgroundScreens: '#595959',
        background: '#494949',
        sectionBackground: '#3C3C3C',
      };
