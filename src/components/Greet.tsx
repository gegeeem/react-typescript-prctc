type GreetProps = {
  name: string;
  message: number;
  isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name}. You have {props.message} unread message
        </h2>
      ) : (
        <h1>Welcome guess</h1>
      )}
    </div>
  );
};
