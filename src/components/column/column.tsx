import React from "react";
import { Column as ColumnStyled } from "./column.style";

interface ColumnProps {
  children: React.ReactNode;
}

const Column = (props: ColumnProps) => {
  const { children } = props;

  return <ColumnStyled>{children}</ColumnStyled>;
};

export default Column;
