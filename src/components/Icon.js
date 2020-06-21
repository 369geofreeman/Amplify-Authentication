import React from "react";
import PropTypes from "prop-types";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Ionicon = ({ name, ...props }) => (
  <Ionicons
    name={Platform.OS === "ios" ? `ios-${name}` : `md-${name}`}
    {...props}
  />
);

Ionicon.propTypes = {
  name: PropTypes.string,
};

export default Ionicon;
