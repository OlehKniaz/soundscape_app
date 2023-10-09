import { Canvas, LinearGradient, Path, Skia, Text, useClockValue, useComputedValue, useValue, vec } from "@shopify/react-native-skia";
import { curveBasis, index, line } from "d3";
import React from "react";
import {
  Alert,
  Dimensions,
  SafeAreaView,
  View,
  StyleSheet,
  Text as RNText,
  TouchableOpacity,
} from "react-native";

const dimens = Dimensions.get("screen");
const width = dimens.width;
const frequency = 4;
const initialAmplitude = 11;
const verticalShiftConst = 100;
const height = dimens.height/4;
const horizontalShift = (dimens.width - width) / 2;

const App = () => {

  const verticalShift = useValue(verticalShiftConst);
  const verticalShift2 = useValue(verticalShiftConst-20);
  const verticalShift3 = useValue(verticalShiftConst/2);
  const amplitude = useValue(initialAmplitude);
  const clock = useClockValue();


  const createWavePath = (phase = 15) => {
    let points = Array.from({ length: width + horizontalShift }, (_, index) => {
      const angle =
        ((index - horizontalShift) / width) * (Math.PI * frequency) + phase;
      return [
        index,
        amplitude.current * Math.sin(angle) + verticalShift.current,
      ];
    });

    const shiftedPoints = points.slice(horizontalShift, width) as [
      number,
      number
    ][];
    const lineGenerator = line().curve(curveBasis);
    const waveLine = lineGenerator(shiftedPoints);
    const bottomLine = `L${
      width + horizontalShift
    },${height} L${horizontalShift},${height}`;
    const extendedWavePath = `${waveLine} ${bottomLine} Z`;
    return extendedWavePath;
  };

  const animatedPath3 = useComputedValue(()=>{
    const current = (clock.current / 600) % 300 ;
    const start = Skia.Path.MakeFromSVGString(createWavePath(current))!;
    const end = Skia.Path.MakeFromSVGString(createWavePath(Math.PI * current))!;
    return start.interpolate(end, 0.3)!;
  },[clock,verticalShift3])

  const animatedPath2 = useComputedValue(()=>{
    const current = (clock.current / 1200) % 300
    const start = Skia.Path.MakeFromSVGString(createWavePath(current))!;
    const end = Skia.Path.MakeFromSVGString(createWavePath(Math.PI * current))!;
    return start.interpolate(end, 0.2)!;
  },[clock,verticalShift2])

const animatedPath = useComputedValue(()=>{
  const current = (clock.current / 1200) % 300
  const start = Skia.Path.MakeFromSVGString(createWavePath(current))!;
  const end = Skia.Path.MakeFromSVGString(createWavePath(Math.PI * current))!;
  return start.interpolate(end, 0.4)!;
},[clock,verticalShift])

const gradientStart = useComputedValue(() => {
  return vec(0, verticalShift.current);
}, [verticalShift]);

const gradientEnd = useComputedValue(() => {
  return vec(0, verticalShift.current + 150);
}, [verticalShift]);


  return (
    <SafeAreaView style={styles.container}>
     <RNText style={styles.buttonText}>Hello world</RNText>
     <Canvas style={styles.canvas}>
     <Path path={animatedPath2} style={'fill'}>
        <LinearGradient
        start={gradientStart}
        end={gradientEnd}
        colors={["#A94859","red"]}
        />
      </Path>
      <Path path={animatedPath} style={"fill"}>
        <LinearGradient
        start={gradientStart}
        end={gradientEnd}
        colors={["#FF5D73","red"]}
        />
      </Path>
     </Canvas>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  canvas: {
    flex: 1,
    marginTop:height*2.7
  },
  path2:{
    marginBottom:20
  },
  buttonContainer: {
    height: 60,
    borderRadius: 8,
    backgroundColor: "#FF5349",
    marginHorizontal: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default App;