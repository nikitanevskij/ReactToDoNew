const initialstate = [
  { id: 0, tittle: "Новое задание 1", done: false },
  { id: 1, tittle: "Новое задание 2", done: true },
  { id: 2, tittle: "Новое задание 3", done: false },
];

const tasks = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const newTask = {
        id: state.length !== 0 ? state.length : 0,
        tittle: action.payload,
        done: false,
      };
      return [...state, newTask];
    }

    case "DONE_TASK": {
      const index = state.map((task) => task.id).indexOf(action.payload);
      state[index].done = true;
      return [...state];
    }

    case "DELETE_TASK": {
      let newState = state.filter((task) => task.id !== action.payload);
      return [...newState];
    }

    default:
      return state;
  }
};

export default tasks;
