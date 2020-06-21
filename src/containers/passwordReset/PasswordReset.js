import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  Animated,
} from "react-native";
import { Auth } from "aws-amplify";
import { AntDesign } from "@expo/vector-icons";
import Input from "../../components/Input";
import {
  windowHeight,
  backgroundWhite,
  windowWidth,
  safeGrey,
  shadowStyle,
  textShaddow,
} from "../../utils/constants";

export default function PasswordReset({ nextScreen, userEmail, navigation }) {
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState(false);
  const iconAnimation = new Animated.Value(0);

  useEffect(() => {
    if (focus) btnAnimation();
  }, [focus]);

  const forgotEmail = async () => {
    if (email.length === 0) return alert("Please enter a valid email");
    try {
      await Auth.forgotPassword(email);
      await userEmail(email);
      nextScreen();
    } catch (err) {
      return alert("Please enter a valid email");
    }
  };

  const btnAnimation = () => {
    Animated.timing(iconAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  let iconColor = iconAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["#fff", "darkorange"],
  });

  return (
    <View>
      <Text style={styles.helperText}>Enter your email address below</Text>
      <View style={[styles.formContainer, shadowStyle]}>
        <Input
          label="Email"
          leftIcon={{ type: "font-awesome", name: "mail" }}
          onChangeText={(value) => setEmail(value)}
          placeholder="my@email.com"
          onFocus={() => setFocus(true)}
        />
      </View>

      <View style={[styles.btnContainer, shadowStyle]}>
        <View style={styles.backBtn}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <AntDesign
              name="close"
              size={35}
              color={"#fff"}
              style={textShaddow}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.submitBtn}>
          <TouchableWithoutFeedback onPress={forgotEmail}>
            <Animated.Text
              style={[{ color: iconColor }, styles.requestBtn, textShaddow]}
            >
              Request Reset Code
            </Animated.Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

const btnSize = windowWidth * 0.15;
const styles = StyleSheet.create({
  helperText: {
    color: safeGrey,
    fontWeight: "700",
    marginVertical: windowHeight * 0.01,
  },
  formContainer: {
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: windowHeight * 0.04,
    borderRadius: windowWidth * 0.03,
    backgroundColor: backgroundWhite,
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: windowHeight * 0.05,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: windowWidth * 0.03,
  },
  submitBtn: {
    backgroundColor: backgroundWhite,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: windowWidth * 0.03,
  },
  backBtn: {
    width: btnSize,
    height: btnSize,
    marginRight: windowWidth * 0.03,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundWhite,
    borderRadius: btnSize / 4,
  },
  requestBtn: {
    fontSize: windowHeight * 0.025,
    textAlign: "center",
    paddingHorizontal: windowWidth * 0.03,
  },
});
