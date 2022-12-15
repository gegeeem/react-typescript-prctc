import React, { useState } from "react";
type UserInputFunc = {
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const UserInput = () => {
  const [inputUser, setUserInput] = useState("");
  const inputChangeUserFunc = (event: string) => {
    setUserInput(event);
    console.log(event);
  };

  return (
    <input
      value={inputUser}
      onChange={(event) => inputChangeUserFunc(event.target.value)}
    />
  );
};
