import React from "react";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Person } from "./components/Person";
import { Personlist } from "./components/Personlist";
import { Status } from "./components/Status";

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
      <Status status="fetching" />
      <Heading>Placeholder</Heading>
    </div>
  );
}

export default App;
