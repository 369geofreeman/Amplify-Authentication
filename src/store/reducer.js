import { AUTHENTICATED, NOT_AUTHENTICATED, SET_LOADING } from "./actionTypes";

const initialState = {
  user: null,
  loading: true,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case NOT_AUTHENTICATED:
      return {
        ...state,
        user: null,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default Reducer;
