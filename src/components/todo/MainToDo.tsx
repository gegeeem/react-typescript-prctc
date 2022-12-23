import { useState } from "react";
import { AddItem } from "./AddItem";
import { ListItem } from "./ListItem";
import { Item } from "./models";

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
  const [listOfAllItems, setListOfAllItems] = useState<Item[]>(todos);
  // const toggler = (id: number) => {
  //   const currentEls: Item[] = listOfAllItems.filter((el) => {
  //     if (el.id === id) {
  //       el.done = !el.done;
  //       return el;
  //     } else {
  //       return el;
  //     }
  //   });
  //   setListOfAllItems(currentEls);
  //   console.log(id);
  // };
  const toggler = (id: number|string) => {
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
  const updateTextItemFunc = (id: number|string, newText: string) => {
    const elementToChange: Item[] = listOfAllItems.map((el) => {
      if (el.id === id) {
        el.taskName = newText;
        return el;
      } else {
        return el;
      }
    });

    setListOfAllItems(elementToChange);
  };

  const onDelete = (id: number|string) => {
    const newListOfItems = listOfAllItems.filter((el) => el.id !== id);
    setListOfAllItems(newListOfItems);
  };
  return (
    <ul>
      <AddItem oldItemList={listOfAllItems} setAddItem={setListOfAllItems} />
      {listOfAllItems.map((el, index) => (
        // <li key={el.taskName + index}>{el.taskName}</li>
        <ListItem
          key={el.taskName + index}
          oneItem={el}
          onCheck={toggler}
          onChangeText={updateTextItemFunc}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
