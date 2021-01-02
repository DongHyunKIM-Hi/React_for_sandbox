import React from "react";

export default function Profile({ match }) {
  const username = {
    Viva: {
      name: "viva",
      age: "26",
      who: "want to be best programmer"
    },
    G_wel: {
      name: "동현",
      age: "25",
      who: "will be traveler"
    }
  };
  const { name } = match.params;
  console.log(match);
  if (!username[name]) {
    return <div>없는 이름인데요?</div>;
  }
  return (
    <div>
      <h2>
        {name} ({username[name].who})
      </h2>
    </div>
  );
}
