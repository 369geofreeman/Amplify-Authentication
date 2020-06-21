import { LayoutAnimation, StyleSheet } from "react-native";

// Layout
import { Dimensions } from "react-native";
export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

// Colours
export const classicWhite = "#a4c4c1";
export const backgroundWhite = "#EAF0FA";
export const offWhite = "#f0f0f0";
export const safeGrey = "#384241";
export const darkGrey = "#637573";
export const neonRed = "#DD2D54";
export const iconBlue = "#007FD5";
export const borderTint = "#deffff";

// Shadow Styles
export const shadowStyle = {
  borderTopWidth: StyleSheet.hairlineWidth,
  borderLeftWidth: StyleSheet.hairlineWidth,
  borderTopColor: "#fff",
  borderLeftColor: "#fff",
  shadowColor: classicWhite,
  shadowOffset: { width: 7, height: 4 },
  shadowOpacity: 0.9,
  shadowRadius: 5,
  elevation: 5,
};

export const mainCardShadow = {
  borderTopWidth: StyleSheet.hairlineWidth,
  borderLeftWidth: StyleSheet.hairlineWidth,
  borderTopColor: borderTint,
  borderLeftColor: borderTint,
  shadowColor: safeGrey,
  shadowOffset: {
    width: 11,
    height: 1,
  },
  shadowOpacity: 0.3,
  shadowRadius: 5,
  elevation: 5,
};

export const textShaddow = {
  shadowColor: "#aaa",
  shadowOffset: {
    width: -3,
    height: -2,
  },
  shadowOpacity: 0.4,
  shadowRadius: 1,
};

// Animations
export const customLayoutAnimation = {
  duration: 300,
  create: {
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.easeIn,
  },
  update: {
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.easeIn,
  },
  delete: {
    duration: 500,
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.keyboard,
  },
};

// colour pallette 1
// export const classicWhite = "#fff";
// export const backgroundWhite = "#ECEEF0";
// export const offWhite = "#f0f0f0";
// export const safeGrey = "#aaa";
// export const darkGrey = "#5F5D63";
// export const neonRed = "#E03E81";
// export const blue = "#28C2E0";
// export const yellow = "#E0D355";

// Colour pallette 2
// export const classicWhite = "#a4c4c1";
// export const backgroundWhite = "#C1E7E3";
// export const offWhite = "#f0f0f0";
// export const safeGrey = "#384241";
// export const darkGrey = "#637573";
// export const neonRed = "#FF9266";
// export const borderTint = "#deffff";
