// Never Mutate State
const ADD_TO_DO = "ADD_TO_DO";

// A list of strings representing tasks to do:
const todos = [
  "Go to the store",
  "Clean the house",
  "Cook dinner",
  "Learn to code",
];

const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      // don't mutate state
      return [...todos, action.todo]; // todos.concat(action.todo) will work too
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo,
  };
};

const store = Redux.createStore(immutableReducer);

// Remove an Item from an Array
const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return state.slice(0, action.index).concat(state.slice(action.index + 1)); // or [...state.slice(0, action.index), ...state.slice(action.index + 1, state.length)];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: "REMOVE_ITEM",
    index,
  };
};

const store = Redux.createStore(immutableReducer);

// Copy an Object with Object.assign
const defaultState = {
  user: "CamperBot",
  status: "offline",
  friends: "732,982",
  community: "freeCodeCamp",
};

const immutableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ONLINE":
      // Object.assign({}, obj1, obj2)
      return Object.assign({}, state, { status: "online" });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: "ONLINE",
  };
};

const store = Redux.createStore(immutableReducer);
