export interface Item {
  id: number;
  taskName: string;
  done: boolean;
}
export interface ListOfItemsToDo {
  ListOfItems: Item[];
}
