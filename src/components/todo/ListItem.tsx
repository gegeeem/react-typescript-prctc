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
    onChangeText(oneItem.id, event.target.value);
  };

  const handleSubmit = () => {
    onChangeText(oneItem.id, textItem);
    setTextItem("");
    setEdit(false);
  };

  return (
    <div>
      <input type={"checkbox"} checked={checkVal} onChange={handelCheck} />
      <input
        type={"text"}
        value={oneItem.taskName}
        onChange={handleTxtChange}
      />
      {isEdit ? (
        <input type={"button"} onClick={handleSubmit} value="save" />
      ) : (
        <input type={"button"} onClick={handleSubmit} value="edit" />
      )}
    </div>
  );
};
