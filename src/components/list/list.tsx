import React from "react";
import { List as StyledList } from "./list.style";

interface ListProps {
  children: React.ReactNode;
}

const List = (props: ListProps) => {
  const { children } = props;

  return <StyledList>{children}</StyledList>;
};

export default List;
