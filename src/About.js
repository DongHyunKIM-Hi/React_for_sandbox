import React from "react";
import qs from "qs";
export default function About({ location }) {
  console.log(location);
  const result = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  console.log(result);
  return (
    <div>
      <h1>About</h1>
      <h3>보낸 값이 {result.name}입니다.</h3>
    </div>
  );
}
