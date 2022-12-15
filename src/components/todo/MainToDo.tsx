import React, { useState } from "react";
import { ListItem } from "./ListItem";
import { ListOfItemsToDo, Item } from "./models";

const todos: Item[] = [
  {
    id: 1,
    taskName: "Shopping go",
    done: false,
  },
  {
    id: 2,
    taskName: "Go to cinema",
    done: true,
  },
  {
    id: 3,
    taskName: "Go to the Class",
    done: false,
  },
];

export const MainToDo = () => {
  const [listOfAllItems, setListOfAllItems] = useState(todos);
  const toggler = (id: number) => {
    const currentEls: Item[] = listOfAllItems.filter((el) => {
      if (el.id === id) {
        el.done = !el.done;
        return el;
      } else {
        return el;
      }
    });
    setListOfAllItems(currentEls);
    console.log(id);
  };
  return (
    <ul>
      {listOfAllItems.map((el, index) => (
        // <li key={el.taskName + index}>{el.taskName}</li>
        <ListItem
          key={el.taskName + index}
          oneItem={el}
          onCheck={() => {
            toggler(el.id);
          }}
        />
      ))}
    </ul>
  );
};
