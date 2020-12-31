import axios from "axios";
import React, { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        loading: true,
        users: null,
        error: null
      };
    case "success":
      return {
        loading: false,
        users: action.data,
        error: null
      };
    case "error":
      return {
        loading: false,
        users: null,
        error: action.error
      };
    default:
      throw new Error("뭐가 틀린겨");
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    users: null,
    error: null
  });
  const fetchApi = async () => {
    dispatch({ type: "loading" });
    console.log(state);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: "success", data: response.data });
      console.log(state);
    } catch (e) {
      dispatch({ tpye: "error", error: e });
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  if (state.loading) return <div>로딩중...</div>;
  if (state.error) return <div>오류 발생 ㅠㅠ</div>;
  if (!state.users) return <div>값이 없나봐유</div>;
  return (
    <div>
      {state.users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
      <button onClick={() => fetchApi()}>새로 고침</button>
    </div>
  );
}
