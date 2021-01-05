import React from "react";
import CounterContainer from "./Container/CounterContainer";
import TodosContainer from "./Container/TodosContainer";

export default function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}
