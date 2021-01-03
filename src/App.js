import axios from "axios";
import React from "react";
import Home from "./Home";
import { Link, Route, Switch } from "react-router-dom";
import About from "./About";
import Profiles from "./Profiles";
export default function App() {
  return (
    <div>
      <li>
        <Link to="/">홈으로 이동</Link>
      </li>
      <li>
        <Link to="/about">about으로 이동</Link>
      </li>
      <li>
        <Link to="/profiles">프로필 목록 보기</Link>
      </li>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route render={({ location }) => <div>발견하지 못하였습니다</div>} />
      </Switch>
    </div>
  );
}
