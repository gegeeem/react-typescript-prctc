import React from "react";
import { Item } from "./models";

interface ListItemProps {
  oneItem: Item;
  onCheck: (id: number) => void;
}
export const ListItem = ({ oneItem, onCheck }: ListItemProps) => {
  return (
    <div>
      <input
        type={"checkbox"}
        checked={oneItem.done}
        onClick={() => onCheck(oneItem.id)}
      />
      <input type={"text"} value={oneItem.taskName} />
    </div>
  );
};
