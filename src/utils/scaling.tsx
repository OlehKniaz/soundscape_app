import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

// Based on Pixel 7a size
// Scales up for bigger screens and scales down for smaller ones
const BASE_WIDTH = 411.42857142857144;
const BASE_HEIGHT = 867.4285714285714;

export const scale = (size: number) => (size * width) / BASE_WIDTH;
export const scaleHeight = (size: number) => (size * height) / BASE_HEIGHT;
