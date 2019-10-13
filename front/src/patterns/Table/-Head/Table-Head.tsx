import React from 'react';
import {cn} from "@bem-react/classname";
import './Table-Head.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnTableHead = cn('Table-Head');

const TableHead: React.FC<IClassNameProps> = ({className, children}) => (
  <thead className={cnTableHead({}, [className])}>{children}</thead>
);

export default TableHead;