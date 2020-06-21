import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { loggedIn } from "../store/authentication";
import Loading from "../components/Loading";
import AuthStack from "./AuthStack";
import HomeStack from "./homeStack/HomeStack";
import { StatusBar } from "react-native";

export default function Routes() {
  const user = useSelector((state) => state.authenticate.user);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const login = (isUser) => dispatch(loggedIn(isUser));

  useEffect(() => {
    (async () => {
      try {
        await setIsLoading(true);
        const isUser = await Auth.currentUserInfo();
        await setIsLoading(false);
        login(isUser);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
