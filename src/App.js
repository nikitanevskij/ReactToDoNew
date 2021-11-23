import React from "react";
import Taskinput from "./TaskInput";
import Task from "./Task";
import { useSelector, useDispatch } from "react-redux";
import {
  addTaskAction,
  doneTaskAction,
  deleteTaskAction,
} from "./redux/actions/actionTasks";

function App() {
  const state = useSelector((tasks) => tasks);

  const dispatch = useDispatch();

  const addTask = (task) => {
    dispatch(addTaskAction(task));
  };

  const doneTask = (id) => {
    dispatch(doneTaskAction(id));
  };

  const deleteTask = (id) => {
    dispatch(deleteTaskAction(id));
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
