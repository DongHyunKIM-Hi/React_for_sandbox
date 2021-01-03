import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

export default function Profiles() {
  return (
    <div>
      <ul>
        <li>
          <Link to="profiles/Viva">Viva</Link>
        </li>
        <li>
          <Link to="profiles/G_wel">G_wel</Link>
        </li>
      </ul>
      <Route path="/profiles" exact render={() => <div>선택하시오</div>} />
      <Route path="/profiles/:name" component={Profile} />
    </div>
  );
}
