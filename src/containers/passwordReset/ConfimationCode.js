import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "../../components/Input";

export default function ConfimationCode({ confirmationCode }) {
  return (
    <View>
      <Input
        label="Code"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        onChangeText={confirmationCode}
        placeholder="verification code"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
