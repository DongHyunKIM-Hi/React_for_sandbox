import { useDispatch, useSelector } from "react-redux";
import Todos from "../componenets/Todos";
import { add_todo, toggle_todo } from "../modules/todos";
import React from "react";

export default function TodosContainer() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  const onCreate = (text) => dispatch(add_todo(text));
  const onToggle = (id) => dispatch(toggle_todo(id));
  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}
