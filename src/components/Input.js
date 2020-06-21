import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import {
  windowWidth,
  safeGrey,
  windowHeight,
  textShaddow,
  darkGrey,
} from "../utils/constants";
import Icon from "./Icon";

export default function Input({
  leftIcon: { name },
  label,
  isHidden,
  ...props
}) {
  return (
    <View style={styles.conatainer}>
      <Text style={[styles.text, textShaddow]}>{label}</Text>
      <View style={styles.inputContainer}>
        <Icon
          name={name}
          size={windowHeight * 0.04}
          color={"darkorange"}
          style={styles.icon}
        />
        <TextInput
          keyboardType={isHidden ? "default" : "email-address"}
          placeholderTextColor={"orange"}
          style={styles.input}
          {...props}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: darkGrey,
    marginVertical: windowWidth * 0.02,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginLeft: windowWidth * 0.03,
  },
  text: {
    marginBottom: windowWidth * 0.01,
    marginLeft: windowWidth * 0.03,
    color: "#fff",
    fontSize: windowHeight * 0.023,
  },
  input: {
    width: "80%",
    fontSize: windowWidth * 0.05,
  },
});
