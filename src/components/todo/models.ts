import { NumericLiteral } from "typescript";

export interface Item {
  id: number;
  taskName: string;
  done: boolean;
}
export interface OnCheck {
  onCheck: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}
export interface OnChangeText {
  onChangeText: (
    event: React.ChangeEvent<HTMLInputElement>,
    ide: NumericLiteral,
    textToChange: string
  ) => void;
}
export interface ListOfItemsToDo {
  ListOfItems: Item[];
}
