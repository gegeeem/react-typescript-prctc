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
    const getLocalStorageitems = JSON.parse(
      localStorage.getItem("ListOfTaskITem") || ""
    );
    // console.log("typeof", typeof getLocalStorageitems);
    if (addTextItem) {
      const newItemAdded: Item = {
        id: uuidv4(),
        taskName: addTextItem,
        done: false,
      };
      // const newLocalItemsList = getLocalStorageitems.push(newItemAdded);
      // console.log("typeof getLocalStorageitems ", typeof getLocalStorageitems);
      getLocalStorageitems.push(newItemAdded);
      // console.log("getLocalStorageitems ", getLocalStorageitems);

      setAddItem((prev) => [...prev, newItemAdded]);
      // localStorage.removeItem("ListOfTaskITem");

      localStorage.setItem(
        "ListOfTaskITem",
        JSON.stringify(getLocalStorageitems)
      );
      setAddTextItem("");
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
