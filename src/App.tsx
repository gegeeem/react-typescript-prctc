import React from "react";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { Personlist } from "./components/Personlist";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Princess", last: "Diana" },
  ];
  return (
    <div className="App">
      <Greet name="Emcane" message={10} isLoggedIn={false} />
      <Person name={personName} />
      <Personlist names={nameList} />
    </div>
  );
}

export default App;
