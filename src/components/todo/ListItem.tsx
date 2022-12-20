import React, { useState, useEffect } from "react";
import { Item, OnCheck } from "./models";

interface ListItemProps {
  oneItem: Item;
  onCheck: (val: number) => void;
  onChangeText: (id: number, text: string) => void;
}
export const ListItem = ({ oneItem, onCheck, onChangeText }: ListItemProps) => {
  const [textItem, setTextItem] = useState<string>(oneItem.taskName);
  const [checkVal, setCheckVal] = useState<boolean>(oneItem.done);
  const [isEdit, setEdit] = useState<boolean>(false);
  const handelCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckVal((prev) => !prev);
    onCheck(oneItem.id);
  };

  const handleTxtChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextItem(event.target.value);
    console.log(textItem);
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
        </div>
      )}
    </div>
  );
};
