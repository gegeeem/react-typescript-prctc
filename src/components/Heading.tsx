type HeadingProps = {
  children: string;
};
export const Heading = (props: HeadingProps) => {
  return <p>{props.children}</p>;
};
