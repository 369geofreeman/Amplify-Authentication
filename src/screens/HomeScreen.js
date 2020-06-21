import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  backgroundWhite,
  textShaddow,
  windowHeight,
  shadowStyle,
  windowWidth,
  safeGrey,
} from "../utils/constants";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.titleText, textShaddow]}>Home</Text>
      <View style={styles.bottomContainer}>
        <Text style={[styles.subText, textShaddow]}>Made using:</Text>
        <View style={styles.logoContainer}>
          <View style={[styles.iconBox, shadowStyle]}>
            <Image
              style={styles.logo}
              source={require("../utils/img/react.png")}
            />
          </View>
          <View style={[styles.iconBox, shadowStyle]}>
            <Image
              style={styles.logo}
              source={require("../utils/img/react-navigation.png")}
            />
          </View>
          <View style={[styles.iconBox, shadowStyle]}>
            <Image
              style={styles.logo}
              source={require("../utils/img/redux.png")}
            />
          </View>
          <View style={[styles.iconBox, shadowStyle]}>
            <Image
              style={styles.logo}
              source={require("../utils/img/amplifyLogo.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundWhite,
  },
  titleText: {
    color: "darkorange",
    fontSize: windowHeight * 0.08,
    fontWeight: "500",
  },
  subText: {
    fontSize: windowHeight * 0.04,
    color: "#fff",
    marginLeft: windowWidth * 0.02,
    marginBottom: windowHeight * 0.02,
  },
  bottomContainer: {
    position: "absolute",
    width: windowWidth * 0.9,
    bottom: windowHeight * 0.13,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconBox: {
    backgroundColor: backgroundWhite,
    borderRadius: windowHeight * 0.02,
  },
  logo: {
    height: windowHeight * 0.08,
    width: windowHeight * 0.08,
  },
});
