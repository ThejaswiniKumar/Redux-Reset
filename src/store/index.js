import { createStore } from "redux";

const initialState = [];

const reducer = (state = initialState, action) => {
  console.log("reducer running", action.data);
  switch (action.type) {
    case "Click":
      return state.concat(action.data);
    case "Reset":
      return (state = "");
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
