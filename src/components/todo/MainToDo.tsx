import { useState } from "react";
import { AddItem } from "./AddItem";
import { ListItem } from "./ListItem";
import { Item } from "./models";
import { SelectBy } from "./SelectBy";

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
if (localStorage.getItem("ListOfTaskITem") === null) {
  localStorage.setItem("ListOfTaskITem", JSON.stringify(todos));
}
export const MainToDo = () => {
  const [listOfAllItems, setListOfAllItems] = useState<Item[]>([]);

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
  const getLocalStorageitems: Item[] = JSON.parse(
    localStorage.getItem("ListOfTaskITem") || ""
  );
  console.log("getLocalStorageitems", getLocalStorageitems);
  // console.log("typeof main getlocalstorage", typeof getLocalStorageitems);
  // console.log("listOfAllItems", listOfAllItems);
  // console.log("todos", todos);
  // getLocalStorageitems.map((el) => el);

  const toggler = (id: number | string) => {
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
  const updateTextItemFunc = (id: number | string, newText: string) => {
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

  const onDelete = (id: number | string) => {
    const newListOfItems = listOfAllItems.filter((el) => el.id !== id);
    setListOfAllItems(newListOfItems);
  };
  return (
    <div>
      <SelectBy
        listOfItems={listOfAllItems}
        setFilterItem={setListOfAllItems}
      />
      <ul>
        <AddItem setAddItem={setListOfAllItems} />
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
    </div>
  );
};
