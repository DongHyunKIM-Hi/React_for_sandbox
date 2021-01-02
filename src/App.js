import axios from "axios";
import React from "react";
import Home from "./Home";
import { Link, Route } from "react-router-dom";
import About from "./About";
import Profile from "./Profile";
export default function App() {
  return (
    <div>
      <li>
        <Link to="/">홈으로 이동</Link>
      </li>
      <li>
        <Link to="/about">about으로 이동</Link>
      </li>
      <hr />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/profile/:name" component={Profile} />
    </div>
  );
}
