import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Modal,
  LayoutAnimation,
  TouchableWithoutFeedback,
} from "react-native";
import { Auth } from "aws-amplify";
import { useDispatch } from "react-redux";
import { loggedIn, loading } from "../store/authentication";
import SignIn from "../containers/signIn/SignIn";
import SignUp from "../containers/signUp/SignUp";
import Input from "../components/Input";
import { Fontisto } from "@expo/vector-icons";
import {
  windowWidth,
  windowHeight,
  customLayoutAnimation,
  backgroundWhite,
  darkGrey,
  shadowStyle,
  textShaddow,
} from "../utils/constants";

const Authentication = ({ navigation }) => {
  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  LayoutAnimation.configureNext(customLayoutAnimation);
  const dispatch = useDispatch();
  const setLoading = () => dispatch(loading());
  const login = (user) => dispatch(loggedIn(user));
  const [modalVisible, setModalVisible] = useState(false);
  const [authForm, setAuthForm] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleConfirmationCode = async () => {
    const { email } = userInput;
    try {
      await setLoading();
      const user = await Auth.confirmSignUp(email, confirmationCode, {});
      await toggleModal();
      login(user);
    } catch (err) {
      await setLoading();
      return alert("Incorrect verification code, please try again");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.toggleAuth}>
        <View>
          <Text style={[styles.welcomeText]}>Welcome</Text>
          <Text style={styles.signInText}>
            {!authForm ? "Sign in" : "Sign up"}
          </Text>
        </View>

        <TouchableWithoutFeedback onPress={() => setAuthForm(!authForm)}>
          <View style={[styles.toggleSigninContainer, shadowStyle]}>
            <Fontisto
              name={!authForm ? "toggle-off" : "toggle-on"}
              color={!authForm ? "#fff" : "darkorange"}
              size={windowWidth * 0.13}
              style={textShaddow}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.formContainer}>
        {authForm && (
          <View style={styles.form}>
            <SignUp
              openModal={toggleModal}
              getUserEmail={(email) => setUserInput({ ...userInput, email })}
            />
          </View>
        )}
        <View style={styles.form}>
          <SignIn
            forgotPasswordButton={() => navigation.navigate("ForgotPassword")}
          />
        </View>
      </View>

      <Modal visible={modalVisible}>
        <View style={styles.container}>
          <Text style={styles.confirmationText}>
            Please enter your confirmation code sent to {userInput.email}
          </Text>
          <Input
            label="Confirmation Code"
            leftIcon={{ type: "font-awesome", name: "lock" }}
            onChangeText={(value) => setConfirmationCode(value)}
          />
          <Button title="Submit" onPress={handleConfirmationCode} />
        </View>
      </Modal>
    </View>
  );
};

const btnSize = windowWidth * 0.14;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundWhite,
    alignItems: "center",
  },
  toggleSigninContainer: {
    marginTop: windowHeight * 0.1,
    marginRight: windowHeight * 0.01,
    justifyContent: "center",
    alignItems: "center",
    width: btnSize * 1.5,
    height: btnSize,
    backgroundColor: backgroundWhite,
    borderRadius: btnSize / 4,
  },

  formContainer: {
    flexDirection: "row",
    width: windowWidth,
  },
  form: {
    width: windowWidth,
    paddingHorizontal: windowWidth * 0.06,
  },
  toggleAuth: {
    width: windowWidth,
    paddingHorizontal: windowWidth * 0.06,
    marginTop: windowHeight * 0.08,
    marginBottom: windowHeight * 0.02,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcomeText: {
    // fontFamily: "Bangla Sangam MN",
    fontSize: windowHeight * 0.06,
    fontWeight: "300",
    color: "darkorange",
    marginBottom: windowHeight * 0.03,
  },
  signInText: {
    // marginBottom: windowHeight * 0.001,
    marginTop: windowHeight * 0.02,
    marginLeft: windowHeight * 0.01,
    fontWeight: "600",
    fontSize: windowHeight * 0.018,
  },
  confirmationText: {
    color: darkGrey,
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Authentication;
