import React from 'react';
import {cn} from "@bem-react/classname";
import './Table-Row.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnTableRow = cn('Table-Row');

const TableRow: React.FC<IClassNameProps> = ({className, children}) => (
  <tr className={cnTableRow({}, [className])}>{children}</tr>
);

export default TableRow;