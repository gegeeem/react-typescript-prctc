import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = (props: InputProps) => {
  const handleChange = (event: InputProps) => {
    console.log(event);
  };
  // return (
  //   <input type={"text"} value={props.value} onChange={handleChange} />
  // );
  return (
    <input type={"text"} value={props.value} onChange={props.handleChange} />
  );
};
