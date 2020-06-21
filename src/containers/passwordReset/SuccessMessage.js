import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  backgroundWhite,
  shadowStyle,
  windowWidth,
  windowHeight,
} from "../../utils/constants";

export default function SuccessMessage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.resetText}>Your password has been reset</Text>
      <View>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={[styles.btnContainer, shadowStyle]}>
            <Feather name="check-circle" size={25} color={"darkorange"} />
            <Text style={styles.signText}>back</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundWhite,
    alignItems: "center",
    marginTop: windowHeight * 0.015,
  },
  resetText: {
    color: "darkorange",
    fontSize: 20,
    fontWeight: "500",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: backgroundWhite,
    borderRadius: windowWidth * 0.03,
    marginTop: windowHeight * 0.55,
    paddingHorizontal: windowWidth * 0.1,
    paddingVertical: windowHeight * 0.02,
  },
  signText: {
    marginLeft: windowWidth * 0.05,
    color: "darkorange",
    fontSize: windowHeight * 0.025,
    fontWeight: "700",
  },
});
