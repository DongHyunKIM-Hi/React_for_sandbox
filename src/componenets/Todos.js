import React, { useState } from "react";

export default function Todos({ todos, onCreate, onToggle }) {
  const [data, setData] = useState("");
  const onChange = (e) => {
    setData(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(data);
    setData("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={data} onChange={onChange} />
        <button type="submit">등록하기</button>
      </form>
      <TodoList todos={todos} onCreate={onCreate} onToggle={onToggle} />
    </div>
  );
}

function TodoItem({ todo, onToggle }) {
  return (
    <li
      onClick={() => onToggle(todo.id)}
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
    >
      {todo.text}
    </li>
  );
}

function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
}
