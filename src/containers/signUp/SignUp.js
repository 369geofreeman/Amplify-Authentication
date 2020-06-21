import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, Animated, Easing } from "react-native";
import { Auth } from "aws-amplify";
import Input from "../../components/Input";
import Loading from "../../components/Loading";
import {
  windowHeight,
  backgroundWhite,
  windowWidth,
  shadowStyle,
  mainCardShadow,
} from "../../utils/constants";
import ActionBtn from "../../components/ActionBtn";

export default function SignUp({ openModal, getUserEmail }) {
  const [isLoading, setIsLoading] = useState(false);
  const [focus, setFocus] = useState();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const formAnimation = new Animated.Value(0);

  const animate = () => {
    Animated.timing(formAnimation, {
      toValue: 1,
      duration: 500,
      easing: Easing.cubic,
      useNativeDriver: false,
    }).start();
  };
  const animateBack = () => {
    Animated.timing(formAnimation, {
      toValue: 0,
      duration: 500,
      easing: Easing.cubic,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (isLoading) animate();
    if (!isLoading) animateBack();
  }, [animate, animateBack]);

  const handleSignUp = async () => {
    const { email, password, confirmPassword } = userInput;
    if (email.length === 0) {
      return alert("Please enter a valid email address");
    }
    if (password.length === 0) {
      return alert("Please enter a password");
    }
    if (password === confirmPassword) {
      try {
        await setIsLoading(true);
        await Auth.signUp({
          username: email,
          password,
          attributes: { email },
        });
        await getUserEmail(email);
        await setIsLoading(false);
        openModal();
      } catch (err) {
        await alert(err.message);
        setIsLoading(false);
      }
    } else {
      alert("Passwords do not match.");
    }
  };

  const boxWidth = formAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["100%", "60%"],
  });

  return (
    <View>
      <Animated.View
        style={[styles.formContainer, mainCardShadow, { width: boxWidth }]}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Input
              label="Email"
              leftIcon={{ name: "mail" }}
              onChangeText={(value) =>
                setUserInput({ ...userInput, email: value })
              }
              placeholder="my@email.com"
            />
            <Input
              label="Password"
              leftIcon={{ name: "lock" }}
              onChangeText={(value) =>
                setUserInput({ ...userInput, password: value })
              }
              placeholder="p@ssw0rd123"
              secureTextEntry
              isHidden
            />
            <Input
              label="Confirm Password"
              leftIcon={{ name: "lock" }}
              onChangeText={(value) =>
                setUserInput({ ...userInput, confirmPassword: value })
              }
              placeholder="p@ssw0rd123"
              secureTextEntry
              isHidden
              onFocus={() => setFocus(true)}
            />
          </>
        )}
      </Animated.View>
      <View style={styles.btnContainer}>
        <ActionBtn handleAction={handleSignUp} focus={focus} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    alignSelf: "center",
    // height: windowHeight * 0.35,
    justifyContent: "center",
    marginBottom: windowHeight * 0.03,
    borderRadius: windowWidth * 0.03,
    backgroundColor: backgroundWhite,
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: windowHeight * 0.05,
  },
  btnContainer: {
    alignSelf: "flex-end",
  },
});
