import React from "react";

function Taskinput({ addTask }) {
  const [state, setState] = React.useState({ input: "" });

  let addTasks = () => {
    const { input } = state;
    if (input) {
      addTask(input);
      setState({ input: "" });
    }
  };

  let inputChange = (e) => {
    setState({ input: e.target.value });
  };

  return (
    <div className="task-input">
      <input onChange={inputChange} value={state.input}></input>
      <button onClick={addTasks}>ADD</button>
    </div>
  );
}

export default Taskinput;
