import React, { useState } from "react";

import { Item } from "./models";
interface AddItemProps {
  oldItemList: Item[];
  setAddItem: React.Dispatch<React.SetStateAction<Item[]>>;
}

export const AddItem = ({ oldItemList, setAddItem }: AddItemProps) => {
  const [addTextItem, setAddTextItem] = useState<string>("");
  const handleTextItemInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddTextItem(event.target.value);
  };
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setAddTextItem("");
  };
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (addTextItem) {
      setAddItem((prev) => [
        ...prev,
        { id: Math.random(), taskName: addTextItem, done: false },
      ]);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type={"text"}
        name="newItem"
        onChange={handleTextItemInput}
        onFocus={handleFocus}
      />
      <input type={"submit"} />
    </form>
  );
};
