import React, { useState } from "react";
import Ionicon from "../../components/Icon";
import Loading from "../../components/Loading";
import { Alert, StyleSheet, Image, View, Text } from "react-native";
import { Auth } from "aws-amplify";
import { useDispatch } from "react-redux";
import {
  windowWidth,
  backgroundWhite,
  shadowStyle,
  darkGrey,
  windowHeight,
  textShaddow,
  safeGrey,
} from "../../utils/constants";
import { loggedOut } from "../../store/authentication";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";

const DrawerContent = ({ navigation, props }) => {
  const dispatch = useDispatch();
  const logout = () => dispatch(loggedOut());
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      await setIsLoading(true);
      await navigation.navigate("Home");
      await Auth.signOut();
      await setIsLoading(false);
      logout();
    } catch (err) {
      await setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <View
        style={[
          styles.logoContainer,
          shadowStyle,
          { marginTop: windowHeight * 0.04 },
        ]}
      >
        <Image
          source={require("../../utils/img/amplifyLogo.png")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.appTitle}>Amplify</Text>
      <Text style={styles.appTitle}>Authentication</Text>
      {/* <Text style={styles.appSigniture}>stevensonjoshua1988@gmail.com</Text> */}

      <View style={[styles.logoContainer, shadowStyle]}>
        <DrawerItem
          label="Home"
          labelStyle={[styles.drawerLabel]}
          style={[styles.drawerItem]}
          icon={() => (
            <Ionicon
              name="home"
              color={"darkorange"}
              size={windowWidth * 0.1}
            />
          )}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <View style={[styles.logoContainer, shadowStyle]}>
        <DrawerItem
          label="Password"
          labelStyle={[styles.drawerLabel]}
          style={[styles.drawerItem]}
          icon={() => (
            <Ionicon
              name="lock"
              color={"darkorange"}
              size={windowWidth * 0.1}
              style={{ marginLeft: windowWidth * 0.07 }}
            />
          )}
          onPress={() => navigation.navigate("SecondScreen")}
        />
      </View>

      {isLoading ? (
        <Loading />
      ) : (
        <View style={[styles.logoutContainer, shadowStyle]}>
          <DrawerItem
            label="Logout"
            labelStyle={[styles.drawerLabel]}
            icon={() => (
              <Ionicon
                name="log-out"
                color={"darkorange"}
                size={windowWidth * 0.1}
              />
            )}
            onPress={() =>
              Alert.alert("Confirm", "Are you sure that you want to logout?", [
                {
                  text: "Yes",
                  onPress: handleSignOut,
                },
                { text: "Cancel", onPress: () => {} },
              ])
            }
          />
        </View>
      )}
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    backgroundColor: backgroundWhite,
  },
  drawerItem: {
    alignItems: "flex-start",
    marginVertical: 0,
    marginLeft: 4,
  },
  drawerLabel: {
    color: "white",
    marginLeft: -16,
    color: "darkorange",
    fontSize: windowHeight * 0.022,
  },
  logoContainer: {
    backgroundColor: backgroundWhite,
    borderRadius: windowWidth * 0.04,
    justifyContent: "center",
    alignItems: "center",
    margin: windowWidth * 0.05,
  },
  logo: {
    marginLeft: windowWidth * 0.02,
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
  },
  appTitle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: windowWidth * 0.06,
    marginLeft: windowWidth * 0.03,
    marginBottom: windowWidth * 0.02,
    shadowColor: "#aaa",
    shadowOffset: {
      width: -3,
      height: -3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.1671875,
  },
  appSigniture: {
    color: safeGrey,
    fontWeight: "600",
    fontSize: windowWidth * 0.03,
    marginLeft: windowWidth * 0.03,
    marginBottom: windowWidth * 0.05,
  },
  logoutContainer: {
    position: "absolute",
    bottom: windowWidth * 0.25,
    backgroundColor: backgroundWhite,
    borderRadius: windowWidth * 0.04,
    marginLeft: windowWidth * 0.03,
  },
});
