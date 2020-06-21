import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { windowHeight } from "../../utils/constants";
import Icon from "../../components/Icon";

const OpenSecondScreen = ({ onPress }) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <Icon name="person" color="darkorange" size={windowHeight * 0.05} />
          {/* <Text style={styles.timerText}>000</Text> */}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default OpenSecondScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timerText: {
    color: "#aaaa",
    fontSize: windowHeight * 0.03,
    marginLeft: 10,
  },
});
