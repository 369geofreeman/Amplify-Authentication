import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Auth } from "aws-amplify";
import ConfirmationCode from "./ConfimationCode";
import Input from "../../components/Input";
import SuccessMessage from "./SuccessMessage";
import {
  windowHeight,
  windowWidth,
  backgroundWhite,
  safeGrey,
  shadowStyle,
} from "../../utils/constants";

export default function NewPassword({ email, navigation }) {
  const [passwordReset, setPasswordReset] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [passwords, setPasswords] = useState({ pass1: "", pass2: "" });

  const resetPassword = async () => {
    if (passwords.pass1.length === 0) return alert("Password cannot be empty");
    if (passwords.pass1.length < 7)
      return alert("Password must be more than 6 characters");
    if (passwords.pass1 !== passwords.pass2)
      return alert("Passwords not match");
    try {
      await Auth.forgotPasswordSubmit(email, confirmationCode, passwords.pass1);
      setPasswordReset(true);
    } catch (err) {
      return alert("Incorrect code, please try again");
    }
  };

  return (
    <View>
      {passwordReset ? (
        <SuccessMessage backBtn={true} navigation={navigation} />
      ) : (
        <>
          <Text style={styles.confirmationCode}>
            Please enter the confirmation code sent to your email, and your
            password below
          </Text>
          <View style={[styles.formContainer, shadowStyle]}>
            <ConfirmationCode
              confirmationCode={(value) => setConfirmationCode(value)}
            />
            <Input
              label="New Password"
              isHidden
              leftIcon={{ type: "font-awesome", name: "lock" }}
              onChangeText={(value) =>
                setPasswords({ ...passwords, pass1: value })
              }
              placeholder="my@email.com"
              secureTextEntry
            />
            <Input
              label="Confirm New Password"
              isHidden
              leftIcon={{ type: "font-awesome", name: "lock" }}
              onChangeText={(value) =>
                setPasswords({ ...passwords, pass2: value })
              }
              placeholder="my@email.com"
              secureTextEntry
            />
          </View>
          <View style={[styles.submitBtn, shadowStyle]}>
            <TouchableWithoutFeedback onPress={resetPassword}>
              <Text style={styles.submitText}> Submit </Text>
            </TouchableWithoutFeedback>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  confirmationCode: {
    color: safeGrey,
    fontWeight: "700",
    marginVertical: windowHeight * 0.01,
    paddingHorizontal: windowWidth * 0.01,
  },
  formContainer: {
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: windowHeight * 0.03,
    borderRadius: windowWidth * 0.03,
    backgroundColor: backgroundWhite,
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: windowHeight * 0.05,
  },
  submitBtn: {
    backgroundColor: backgroundWhite,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: windowWidth * 0.03,
  },
  submitText: {
    color: "darkorange",
    textAlign: "center",
    fontSize: windowHeight * 0.025,
    paddingVertical: windowHeight * 0.02,
    paddingHorizontal: windowWidth * 0.03,
  },
});
