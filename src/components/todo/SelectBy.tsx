import React, { useState } from "react";
import { Item } from "./models";

interface SelectByProps {
  listOfItems: Item[];
  setFilterItem: React.Dispatch<React.SetStateAction<Item[]>>;
}

type selectValues = "all" | "active" | "completed";
export const SelectBy = ({ listOfItems, setFilterItem }: SelectByProps) => {
  const [selectState, setSelectedState] = useState<string>("all");
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
    const getLocalStorageitems: Item[] = JSON.parse(
      localStorage.getItem("ListOfTaskITem") || ""
    );
    console.log("getLocalStorageitems", getLocalStorageitems);
    if (event.target.value === "all") {
      setFilterItem(getLocalStorageitems);
    }
    if (event.target.value === "active") {
      console.log("getLocalStorageitems", getLocalStorageitems);

      const newOrderList = getLocalStorageitems?.filter(
        (el) => el.done === false
      );
      setFilterItem(newOrderList);
    }
    if (event.target.value === "completed") {
      const newOrderList = getLocalStorageitems?.filter(
        (el) => el.done === true
      );
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
