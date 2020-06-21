import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Animated from "react-native-reanimated";
import { StyleSheet, View } from "react-native";
import { backgroundWhite } from "../../utils/constants";
import DrawerContent from "./DrawerContent";
import Screens from "./Screens";

const Drawer = createDrawerNavigator();

export default function HomeStack() {
  const [progress, setProgress] = React.useState(new Animated.Value(0));

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 116],
  });
  const spin = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 0.05],
  });

  const animatedStyle = {
    borderRadius,
    transform: [{ scale, rotateX: spin, rotateZ: spin, rotateY: spin }],
  };

  return (
    <View style={styles.contentContainerStyle}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={{ flex: 1 }}
        drawerContentOptions={{
          activeBackgroundColor: "transparent",
          activeTintColor: "white",
          inactiveTintColor: "white",
        }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Screens">
          {(props) => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    backgroundColor: backgroundWhite,
  },
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
  drawerStyles: {
    flex: 1,
    width: "50%",
    backgroundColor: "transparent",
  },
});
