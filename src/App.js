import React from "react";
import Taskinput from "./TaskInput";
import Task from "./Task";

function App() {
  const [state, setState] = React.useState([
    { id: 0, tittle: "Новое задание 1", done: false },
    { id: 1, tittle: "Новое задание 2", done: true },
    { id: 2, tittle: "Новое задание 3", done: false },
  ]);

  const addTask = (task) => {
    let newTask = {
      id: state.length !== 0 ? state.length : 0,
      tittle: task,
      done: false,
    };

    setState([...state, newTask]);
  };

  const doneTask = (id) => {
    const index = state.map((task) => task.id).indexOf(id);
    state[index].done = true;
    setState([...state]);
  };

  const deleteTask = (id) => {
    let newState = state.filter((task) => task.id !== id);

    setState([...newState]);
  };

  const activeTasks = state.filter((item) => !item.done);
  const doneTasks = state.filter((item) => item.done);
  return (
    <div className="App">
      <h1 className="top"> Active tasks: {activeTasks.length}</h1>
      {[...activeTasks, ...doneTasks].map((task) => (
        <Task
          task={task}
          key={task.id}
          doneTask={() => doneTask(task.id)}
          deleteTask={() => deleteTask(task.id)}
        />
      ))}
      <Taskinput addTask={addTask}></Taskinput>
    </div>
  );
}

export default App;
