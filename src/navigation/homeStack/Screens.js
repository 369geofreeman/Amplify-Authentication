import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import Header from "../../containers/header/Header";
import HomeScreen from "../../screens/HomeScreen";
import SecondScreen from "../../screens/SecondScreen";

const Stack = createStackNavigator();

const Screens = ({ style, navigation }) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: (props) => (
            <Header
              openDrawer={() => navigation.openDrawer()}
              openSecondPage={() => navigation.navigate("SecondScreen")}
            />
          ),
        }}
      >
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="SecondScreen"
          options={{
            headerTitle: "Reset Password",
            animationEnabled: true,
            headerTintColor: "darkorange",
            headerTitleStyle: {
              color: "darkorange",
            },
          }}
        >
          {(props) => <SecondScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

export default Screens;

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
  },
});
