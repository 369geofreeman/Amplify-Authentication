import { createStore, combineReducers } from "redux";
import Reducer from "./reducer";

const rootreducer = combineReducers({
  authenticate: Reducer,
});

const configureStore = () => {
  return createStore(rootreducer);
};

export default configureStore;
