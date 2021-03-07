import React from "react";
import { ListTitle as StyledListTitle } from "./listTitle.style";

interface ListTitleProps {
  text: string;
}

const List = (props: ListTitleProps) => {
  const { text } = props;

  return <StyledListTitle>{text}</StyledListTitle>;
};

export default List;
