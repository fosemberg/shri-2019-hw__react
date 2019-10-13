import React from 'react';
import {cn} from "@bem-react/classname";
import './Table.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnTable = cn('Table');

const Table: React.FC<IClassNameProps> = ({className, children}) => (
  <table className={cnTable({}, [className])}>{children}</table>
);

export default Table;