import React from "react";
import { Checkbox } from "@mantine/core";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  
};
export const Button = (props: ButtonProps) => {
  return (
    <>
      <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
      <Checkbox />
    </>
  );
};
