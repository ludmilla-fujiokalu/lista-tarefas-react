import React, { useState } from "react";

// Formulário para adicionar tarefas
function AddTaskForm({ addTask }) {
  const [taskText, setTaskText] = useState(""); // guarda o texto digitado

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que a página recarregue
    if (taskText.trim()) {
      addTask(taskText); // adiciona tarefa
      setTaskText(""); // limpa o input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AddTaskForm;

