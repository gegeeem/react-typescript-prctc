import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
// export const Input = (props: InputProps) => { before desctructuring props, and bellow after
//   const handleChange = (event: InputProps) => {
//     console.log(event);
//   };
//   // return (
//   //   <input type={"text"} value={props.value} onChange={handleChange} />
//   // );
//   return (
//     <input type={"text"} value={props.value} onChange={props.handleChange} />
//   );
// };
//after destructuring props
export const Input = ({ value, handleChange }: InputProps) => {
  // return (
  //   <input type={"text"} value={props.value} onChange={handleChange} />
  // );
  return <input type={"text"} value={value} onChange={handleChange} />;
};
