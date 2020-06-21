import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import { windowHeight } from "../../utils/constants";
import Icon from "../../components/Icon";

export default function MenuButton({ onPress }) {
  const toggleMenu = (onPress) => {
    onPress();
  };

  return (
    <TouchableOpacity onPress={() => toggleMenu(onPress)}>
      <Icon name="menu" color="darkorange" size={windowHeight * 0.054} />
    </TouchableOpacity>
  );
}

MenuButton.propTypes = {
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  menu: {
    top: -windowHeight * 0.01,
    left: -windowHeight * 0.002,
  },
});

// https://lottiefiles.com/8161-hamburger-menu-animation
