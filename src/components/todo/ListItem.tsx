import React, { useState } from "react";
import { Item } from "./models";

interface ListItemProps {
  oneItem: Item;
  onCheck: (val: number | string) => void;
  onChangeText: (id: number | string, text: string) => void;
  onDelete: (id: number | string) => void;
}
export const ListItem = ({
  oneItem,
  onCheck,
  onChangeText,
  onDelete,
}: ListItemProps) => {
  const [textItem, setTextItem] = useState<string>(oneItem.taskName);
  const [checkVal, setCheckVal] = useState<boolean>(oneItem.done);
  const [isEdit, setEdit] = useState<boolean>(false);

  const getLocalStorageitems = JSON.parse(
    localStorage.getItem("ListOfTaskITem") || ""
  );
  const checkItemInLocalStrg = (id: number | string) => {
    const currentEls = getLocalStorageitems.map((el: Item) => {
      if (el.id === id) {
        el.done = !el.done;
        return el;
      } else {
        return el;
      }
    });
    console.log("currentEls", getLocalStorageitems);
    localStorage.setItem("ListOfTaskITem", JSON.stringify(currentEls));
  };

  const handelCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckVal((prev) => !prev);
    onCheck(oneItem.id);
    checkItemInLocalStrg(oneItem.id);
  };

  const handleTxtChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextItem(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onChangeText(oneItem.id, textItem);
    setTextItem("");
    setEdit(false);
  };
  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTextItem(oneItem.taskName);
    setEdit(true);
  };
  const handleDeleteItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onDelete(oneItem.id);
  };
  return (
    <div>
      {isEdit ? (
        <div>
          <input type={"checkbox"} checked={checkVal} onChange={handelCheck} />
          <input type={"text"} value={textItem} onChange={handleTxtChange} />
          <button onClick={handleSubmit}>save</button>
        </div>
      ) : (
        <div>
          <input type={"checkbox"} checked={checkVal} onChange={handelCheck} />
          <input
            type={"text"}
            value={oneItem.taskName}
            onChange={handleTxtChange}
            disabled={true}
          />
          <button onClick={handleEdit}>edit</button>
          <button onClick={handleDeleteItem}>delete</button>
        </div>
      )}
    </div>
  );
};
