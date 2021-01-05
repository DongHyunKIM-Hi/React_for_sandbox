const ADD_TODO = "todos/add_todo";
const TOGGLE_TODO = "todos/toggle_todo";

let nextId = 2;
export const add_todo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text: text,
    done: false
  }
});

export const toggle_todo = (id) => ({ type: TOGGLE_TODO, id });
const initial_todo = [
  {
    id: 1,
    text: "let",
    done: false
  }
];

export default function todos(state = initial_todo, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        state: state.concat(action.todo)
      };
    case TOGGLE_TODO:
      return {
        state: state.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        )
      };
    default:
      return state;
  }
}
