import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [users, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    try {
      setUser(null);
      setLoading(true);
      setError(null);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUser(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  useEffect(() => fetchApi(), []);
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!users) return null;
  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
}
