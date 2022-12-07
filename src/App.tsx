import React from "react";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
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
      <Greet name="Emcane" isLoggedIn={true} messageCount={12} />
      <Person name={personName} />
      <Personlist names={nameList} />
      <Status status="fetching" />
      <Oscar>
        <Heading>Oscar goes to Leonardo DiCaprio</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          event.preventDefault();
          console.log("Button clicked", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      />
      <Container
        styles={{
          border: "1px solid gray",
          width: "80%",
          margin: "0 auto",
          borderRadius: "5px",
          backgroundColor: "ButtonFace",
        }}
      />
    </div>
  );
}

export default App;
