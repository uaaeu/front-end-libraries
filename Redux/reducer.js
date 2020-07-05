// Handle an Action in the Store
const defaultState = {
  login: false,
};

const reducer = (state = defaultState, action) => {
  if (action.type === "LOGIN") {
    return {
      login: true,
    };
  }
  return state;
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};
