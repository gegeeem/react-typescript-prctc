type StatusProps = {
  status: "loading" | "fetching" | "error";
};
export const Status = (props: StatusProps) => {
  return <div>{props.status}</div>;
};
