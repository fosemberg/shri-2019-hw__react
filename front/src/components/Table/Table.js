import React from 'react';
import {cn} from "@bem-react/classname";
import './Table.scss';

export const cnTable = cn('Table');

const Table = ({className, children}) => (
  <div className={cnTable({}, [className])}>{children}</div>
);

export default Table;