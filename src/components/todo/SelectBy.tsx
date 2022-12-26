import React, { useState } from "react";
import { Item } from "./models";

type SelectByProps = {
  listOfItems: Item[];
  setFilterItem: React.Dispatch<React.SetStateAction<Item[]>>;
};

export const SelectBy = ({ listOfItems, setFilterItem }: SelectByProps) => {
  const [selectState, setSelectedState] = useState<string>();
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
    if (event.target.value === "all") return;
    if (event.target.value === "active") {
      const newOrderList = listOfItems.filter((el) => el.done === false);
      setFilterItem(newOrderList);
    }
    if (event.target.value === "completed") {
      const newOrderList = listOfItems.filter((el) => el.done === true);
      setFilterItem(newOrderList);
    }
  };
  return (
    <select value={selectState} onChange={handleSelect}>
      <option value={"all"}>All</option>
      <option value={"active"}>Active</option>
      <option value={"completed"}>Completed</option>
    </select>
  );
};
