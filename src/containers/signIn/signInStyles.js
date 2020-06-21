import { StyleSheet } from "react-native";
import {
  backgroundWhite,
  windowWidth,
  windowHeight,
  safeGrey,
} from "../../utils/constants";

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  formContainer: {
    alignSelf: "center",
    height: windowHeight * 0.25,
    justifyContent: "center",
    marginBottom: windowHeight * 0.03,
    borderRadius: windowWidth * 0.03,
    backgroundColor: backgroundWhite,
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: windowHeight * 0.05,
  },
  forgotPasswordContainer: {
    backgroundColor: backgroundWhite,
    marginLeft: windowWidth * 0.03,
    borderRadius: windowWidth * 0.03,
    paddingHorizontal: 10,
    paddingVertical: windowHeight * 0.02,
  },
  forgotPasswordText: {
    color: "#fff",
    fontWeight: "400",
    fontSize: windowWidth * 0.05,
  },
});
