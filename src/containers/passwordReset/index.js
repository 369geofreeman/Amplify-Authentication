import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PasswordReset from "./PasswordReset";
import NewPassword from "./NewPassword";
import {
  windowHeight,
  windowWidth,
  backgroundWhite,
  textShaddow,
} from "../../utils/constants";

export default function ({ navigation, dispatch }) {
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Text style={[styles.title, textShaddow]}>Reset password</Text>
      {passwordChanged ? (
        <NewPassword
          email={email}
          navigation={navigation}
          dispatch={dispatch}
        />
      ) : (
        <PasswordReset
          nextScreen={() => setPasswordChanged(true)}
          userEmail={(e) => setEmail(e)}
          navigation={navigation}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    paddingTop: windowHeight * 0.1,
    paddingHorizontal: windowWidth * 0.05,
    backgroundColor: backgroundWhite,
  },
  title: {
    color: "#fff",
    fontSize: windowHeight * 0.05,
    fontWeight: "500",
    textAlign: "center",
    marginTop: windowHeight * 0.04,
    marginBottom: windowHeight * 0.05,
  },
});
