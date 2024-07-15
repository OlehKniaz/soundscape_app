import { FC, useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";
import { colors } from "../../../../styles/colors";
import { sh, sw } from "../../../../utils";
import LinearGradient from "react-native-linear-gradient";
import { getColors, ImageColorsResult } from "react-native-image-colors";
import { platform } from "node:os";
import { color } from "d3";

const { width, height } = Dimensions.get("window");

interface SearchItem {
  item: any;
}

export const SearchItem: FC<SearchItem> = ({ item }) => {
  const [imageColors, setImageColors] = useState<ImageColorsResult>();
  const [backColorMain, setBackColorMain] = useState(colors.sectionBackground);
  const [backColorSecondary, setBackColorSecondary] = useState(colors.darkPink);
  useEffect(() => {
    const fetchColors = async () => {
      const url = item.logo;
      getColors(url, {
        fallback: "#228B22",
        cache: true,
        key: url
      }).then(setImageColors);
      if (imageColors != undefined) {
        setBackColorMain(imageColors["average"]);
        setBackColorSecondary(imageColors["darkMuted"]);
      }
      // console.error('Error fetching colors:');
    };
    fetchColors();
  }, [imageColors, item.logo]);
  // [imageColors['average'], imageColors['darkMuted']
  return (
    <Pressable style={styles.section}>
      <LinearGradient
        colors={[backColorMain, backColorSecondary]}
        start={{ x: 0.45, y: 0.6 }}
        style={styles.gradientBlock}>
        <Image source={{ uri: item.logo }} style={styles.imageStyles} />
        <View style={styles.viewText}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.extraText}>{item.artist}</Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    width: width * 0.9,
    height: height * 0.11,
    borderRadius: 11,
    marginTop: sh(10)
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text
  },
  extraText: {
    fontSize: 13,
    color: colors.inactiveText,
    paddingHorizontal: sw(5)
  },
  viewText: {
    paddingHorizontal: sw(5)
  },
  gradientBlock: {
    width: "100%",
    borderRadius: 11,
    paddingHorizontal: sh(5),
    paddingVertical: sw(5),
    flexDirection: "row"
  },
  imageStyles: {
    width: "25%",
    borderRadius: 11
  }
});
