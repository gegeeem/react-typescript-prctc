type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[]; //array of objects
};

export const Personlist = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((el, i) => (
        <h2 key={i}>
          {el.first} {el.last}
        </h2>
      ))}
    </div>
  );
};
