import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text as RNText,
  Dimensions,
  View
} from "react-native";
import { Canvas, LinearGradient, Path, Skia, useClockValue, useComputedValue, useValue, vec } from "@shopify/react-native-skia";
import { curveBasis, line } from "d3";

const dimens = Dimensions.get("screen");

const WaveBackground = () => {
  const width = dimens.width;
  const frequency = 4;
  const initialAmplitude = 11;
  const verticalShiftConst = 100;
  const height = dimens.height / 4;
  const horizontalShift = (dimens.width - width) / 2;

  const verticalShift = useValue(verticalShiftConst);
  const verticalShift2 = useValue(verticalShiftConst - 20);
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

  const animatedPath2 = useComputedValue(() => {
    const current = (clock.current / 1200) % 500;
    const start = Skia.Path.MakeFromSVGString(createWavePath(current))!;
    const end = Skia.Path.MakeFromSVGString(
      createWavePath(Math.PI * (current - 100))
    )!;
    return start.interpolate(end, 0.2)!;
  }, [clock, verticalShift2]);

  const animatedPath = useComputedValue(() => {
    const current = (clock.current / 1500) % 200;
    const start = Skia.Path.MakeFromSVGString(createWavePath(current))!;
    const end = Skia.Path.MakeFromSVGString(
      createWavePath(Math.PI * current)
    )!;
    return start.interpolate(end, 0.4)!;
  }, [clock, verticalShift]);

  const gradientStart = useComputedValue(() => {
    return vec(0, verticalShift.current);
  }, [verticalShift]);

  const gradientEnd = useComputedValue(() => {
    return vec(0, verticalShift.current + 150);
  }, [verticalShift]);

  return (
      <Canvas style={styles.canvas}>
        <Path path={animatedPath2} style={"fill"}>
          <LinearGradient
            start={gradientStart}
            end={gradientEnd}
            colors={["#A94859", "#494949"]}
          />
        </Path>
        <Path path={animatedPath} style={"fill"}>
          <LinearGradient
            start={gradientStart}
            end={gradientEnd}
            colors={["#FF5D73", "#494949"]}
          />
        </Path>
      </Canvas>
  );
};

const styles = StyleSheet.create({
  canvas: {
    position: "absolute",
    zIndex: 666,
    flex: 1,
    width: dimens.width,
    height: 230,
    marginTop: dimens.height - 230,
  },
});

export default WaveBackground;
