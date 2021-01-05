import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import counter from "./modules/counter";
import rootReducer from "./modules/rootReducer";
import todos from "./modules/todos";
const rootElement = document.getElementById("root");
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
