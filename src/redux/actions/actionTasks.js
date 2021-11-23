export const addTaskAction = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const doneTaskAction = (id) => ({
  type: "DONE_TASK",
  payload: id,
});

export const deleteTaskAction = (id) => ({
  type: "DELETE_TASK",
  payload: id,
});
