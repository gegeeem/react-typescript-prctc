import { Name } from "./Person.type";
type PersonListProps = {
  names: Name[];// arr of type 'Name' imported
};

export const PersonListWithImportedType = (props: PersonListProps) => {
    return<div></div>
};
