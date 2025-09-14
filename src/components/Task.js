import React from "react";

// Componente que representa uma tarefa
function Task({ task, toggleComplete, removeTask }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "5px 0" }}>
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
      </span>
      <div>
        <button onClick={() => toggleComplete(task.id)}>✔</button>
        <button onClick={() => removeTask(task.id)}>❌</button>
      </div>
    </div>
  );
}

export default Task;

