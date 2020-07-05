// Define a Redux Action
const action = {
  type: "LOGIN",
};

// Define an Action Creator
const actionCreator = () => action;

// Dispatch an Action Event
const store = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

// Dispatch the action
store.dispatch(loginAction());
