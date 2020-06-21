import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Authentification from "../screens/Authentification";
import SecondScreen from "../screens/SecondScreen";

const Stack = createStackNavigator();

export default function AuthStack({}) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Authentification}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={SecondScreen}
        options={{
          header: () => null,
          gestureDirection: "horizontal-inverted",
        }}
      />
    </Stack.Navigator>
  );
}
