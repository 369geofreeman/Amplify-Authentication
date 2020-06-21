import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from "react-native";
import { Auth } from "aws-amplify";
import { useDispatch } from "react-redux";
import { loggedIn } from "../../store/authentication";
import { styles } from "./signInStyles";
import Input from "../../components/Input";
import ActionBtn from "../../components/ActionBtn";
import Loading from "../../components/Loading";
import {
  mainCardShadow,
  shadowStyle,
  textShaddow,
} from "../../utils/constants";

export default function SignIn({ forgotPasswordButton }) {
  const dispatch = useDispatch();
  const login = (user) => dispatch(loggedIn(user));
  const [focus, setFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
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

  const handleSignIn = async () => {
    const { email, password } = userInput;
    if (email.length === 0) {
      return alert("Please enter an email");
    }
    if (password.length === 0) {
      return alert("Please enter a password");
    }
    try {
      await setIsLoading(true);
      const user = await Auth.signIn(email, password);
      await setIsLoading(false);
      // await animate();
      login(user);
    } catch (err) {
      console.log(err);
      await login(null);
      await setIsLoading(false);

      return alert(err.message);
    }
  };

  const boxSize = formAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["100%", "60%"],
  });

  return (
    <View>
      <Animated.View
        style={[styles.formContainer, mainCardShadow, { width: boxSize }]}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Input
              label="Email"
              onFocus={() => setFocus(true)}
              leftIcon={{ type: "font-awesome", name: "mail" }}
              onChangeText={(value) =>
                setUserInput({ ...userInput, email: value })
              }
              placeholder="my@email.com"
            />
            <Input
              label="Password"
              leftIcon={{ type: "font-awesome", name: "lock" }}
              onChangeText={(value) =>
                setUserInput({ ...userInput, password: value })
              }
              placeholder="p@ssw0rd123"
              secureTextEntry
              isHidden
            />
          </>
        )}
      </Animated.View>
      <View style={styles.buttonContainer}>
        <View style={[styles.forgotPasswordContainer, shadowStyle]}>
          <TouchableWithoutFeedback onPress={forgotPasswordButton}>
            <Text style={[styles.forgotPasswordText, textShaddow]}>
              Forgot Password?
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <ActionBtn handleAction={handleSignIn} focus={focus} />
      </View>
    </View>
  );
}
