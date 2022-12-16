import React, { useState } from "react";
import { Item, OnCheck, } from "./models";

interface ListItemProps {
  oneItem: Item;
  onCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const ListItem = ({ oneItem, onCheck, onChangeText }: ListItemProps) => {
  const [textItem, setTextItem] = useState("");
  return (
    <div>
      <input type={"checkbox"} checked={oneItem.done} onChange={onCheck} />
      <input type={"text"} value={oneItem.taskName} onChange={onChangeText} />
    </div>
  );
};
