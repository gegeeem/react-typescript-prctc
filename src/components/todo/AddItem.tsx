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
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.value = "";
  };
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (addTextItem) {
      setAddItem((prev) => [
        ...prev,
        { id: Math.random() * 10, taskName: addTextItem, done: false },
      ]);
      setAddTextItem("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type={"text"}
        name="newItem"
        onChange={handleTextItemInput}
        onFocus={handleFocus}
        value={addTextItem}
      />
      <button>Add</button>
    </form>
  );
};
