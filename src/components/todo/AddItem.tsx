import React, { useState } from "react";
import { Item } from "./models";

interface AddItemProps {
  setAddItem: React.Dispatch<React.SetStateAction<Item[]>>;
}

export const AddItem = ({ setAddItem }: AddItemProps) => {
  const [addTextItem, setAddTextItem] = useState<string>("");
  const handleTextItemInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddTextItem(event.target.value);
  };
  // const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
  //   event.target.value = "";
  // };
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { v4: uuidv4 } = require("uuid"); /// create new id function

    if (addTextItem) {
      setAddItem((prev) => [
        ...prev,
        { id: uuidv4(), taskName: addTextItem, done: false },
      ]);
      setAddTextItem("");
      console.log("event", event);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type={"text"}
        name="newItem"
        onChange={handleTextItemInput}
        // onFocus={handleFocus}
        value={addTextItem}
      />
      <button>Add</button>
    </form>
  );
};
