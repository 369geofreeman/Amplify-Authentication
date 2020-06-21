import React from "react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import Routes from "./src/navigation/Routes";

Amplify.configure(awsconfig);
const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
