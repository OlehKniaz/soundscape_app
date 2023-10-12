import {Appearance} from 'react-native';
const colorScheme = Appearance.getColorScheme();

export const colors =
    colorScheme === 'light'
    ?{
        pink:'#A94859',
        darkPink:'#FF5D73',
        text:'#B9B9B9',
        inactiveIcon:'#B9B9B9',
        background:'#494949',
        sectionBackground:'#3C3C3C'
    }:{
        pink:'#A94859',
        darkPink:'#FF5D73',
        text:'#B9B9B9',
        inactiveIcon:'#B9B9B9',
        background:'#494949',
        sectionBackground:'#3C3C3C'
    }