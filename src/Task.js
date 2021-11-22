import React from "react";

const Task = ({ task, ...props }) => {
  const ActionBtn = () => (
    <div className="action-btn">
      {task.done ? (
        <p onClick={props.deleteTask}>❌</p>
      ) : (
        <p onClick={props.doneTask}>✔️</p>
      )}
    </div>
  );

  const className = "task " + (task.done ? "task-done" : "");

  return (
    <div className={className}>
      <p>{task.tittle}</p>
      <ActionBtn></ActionBtn>
    </div>
  );
};

export default Task;
