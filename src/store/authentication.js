import { AUTHENTICATED, NOT_AUTHENTICATED, SET_LOADING } from "./actionTypes";

export const loggedIn = (user) => {
  return {
    type: AUTHENTICATED,
    payload: user,
  };
};

export const loggedOut = () => {
  return {
    type: NOT_AUTHENTICATED,
  };
};

export const loading = () => {
  return {
    type: SET_LOADING,
  };
};
