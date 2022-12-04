import React from "react";
import { Greet } from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Emcane" message={10} isLoggedIn={false} />
    </div>
  );
}

export default App;
