import React from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import { windowWidth } from "../../utils/constants";

import MenuButton from "./MenuButton";
import OpenSecondScreen from "./OpenSecondScreen";

const Header = ({ openDrawer, openSecondPage }) => {
  return (
    <View style={styles.container}>
      <MenuButton onPress={openDrawer} />
      <View />
      <OpenSecondScreen onPress={openSecondPage} />
    </View>
  );
};

Header.propTypes = {
  openDrawer: PropTypes.func,
  openSecondPage: PropTypes.func,
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: windowWidth,
    paddingHorizontal: windowWidth * 0.06,
    marginTop: 10,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderColor: '#aaa',
  },
});
