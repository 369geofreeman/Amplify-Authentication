import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableWithoutFeedback, Animated } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  windowWidth,
  backgroundWhite,
  neonRed,
  safeGrey,
  shadowStyle,
  textShaddow,
} from "../utils/constants";

export default function ActionBtn({ handleAction, focus }) {
  const [toggleBtn, setToggleBtn] = useState(false);
  const iconAnimation = new Animated.Value(0);

  useEffect(() => {
    if (focus) btnAnimation();
  }, [focus]);

  const btnAnimation = () => {
    Animated.timing(iconAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => setToggleBtn(!toggleBtn));
  };

  let iconColor = iconAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["#fff", "darkorange"],
  });

  const submitBtn = () => {
    handleAction();
  };

  return (
    <Animated.View style={[styles.btnContainer, shadowStyle]}>
      <TouchableWithoutFeedback onPress={submitBtn}>
        <Animated.Text style={[{ color: iconColor }, textShaddow]}>
          <Feather name="power" size={35} style={styles.submitBtn} />
        </Animated.Text>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
}

const btnSize = windowWidth * 0.15;

const styles = StyleSheet.create({
  btnContainer: {
    width: btnSize,
    height: btnSize,
    marginRight: windowWidth * 0.03,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundWhite,
    borderRadius: btnSize / 4,
  },

  submitBtn: {},
});
