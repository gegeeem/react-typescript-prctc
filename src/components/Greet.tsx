type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  const { messageCount = "zero" } = props; // like default value of prop
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name}. You have {messageCount} unread message
        </h2>
      ) : (
        <h1>Welcome guess</h1>
      )}
    </div>
  );
};
