import React from "react";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  return (
    <div className="App">
      <Greet name="Emcane" message={10} isLoggedIn={false} />
      <Person name={personName} />
    </div>
  );
}

export default App;
