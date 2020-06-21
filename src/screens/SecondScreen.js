import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PasswordReset from "../containers/passwordReset";

export default function SecondScreen({ navigation, dispatch }) {
  return (
    <View style={styles.container}>
      <PasswordReset
        navigation={navigation}
        dispatch={dispatch}
        fromLoggedIn={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#aaa",
    fontSize: 30,
    fontWeight: "500",
  },
});
