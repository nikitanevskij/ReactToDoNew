import React from "react";
import Taskinput from "./TaskInput";
import Task from "./Task";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { id: 0, tittle: "Новое задание 1", done: false },
        { id: 1, tittle: "Новое задание 2", done: true },
        { id: 2, tittle: "Новое задание 3", done: false },
      ],
    };
  }

  addTask = (task) => {
    this.setState((state) => {
      let { tasks } = state;
      tasks.push({
        id: tasks.length !== 0 ? tasks.length : 0,
        tittle: task,
        done: false,
      });
      return tasks;
    });
  };

  doneTask = (id) => {
    const index = this.state.tasks.map((task) => task.id).indexOf(id);
    this.setState((state) => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    });
  };

  deleteTask = (id) => {
    const index = this.state.tasks.map((task) => task.id).indexOf(id);
    this.setState((state) => {
      let { tasks } = state;
      delete tasks[index];
      return tasks;
    });
  };

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter((item) => !item.done);
    const doneTasks = tasks.filter((item) => item.done);
    return (
      <div className="App">
        <h1 className="top"> Active tasks: {activeTasks.length}</h1>
        {[...activeTasks, ...doneTasks].map((task) => (
          <Task
            task={task}
            key={task.id}
            doneTask={() => this.doneTask(task.id)}
            deleteTask={() => this.deleteTask(task.id)}
          />
        ))}
        <Taskinput addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
