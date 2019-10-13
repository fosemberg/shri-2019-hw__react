import React from 'react';
import {cnTable, ITable} from "./index";
import './Table.scss';

const Table: React.FC<ITable> = ({className, children}) => (
  <table className={cnTable({}, [className])}>{children}</table>
);

export default Table;