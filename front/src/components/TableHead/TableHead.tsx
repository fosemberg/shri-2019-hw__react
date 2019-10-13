import React from "react";
import TableRow from "../../patterns/Table/-Row/Table-Row";
import TableCell from "../../patterns/Table/-Cell/Table-Cell";
import TableHeadBase from "../../patterns/Table/-Head/Table-Head";

interface ITableHead {
  names?: string[];
}

const TableHead:React.FC<ITableHead> = ({names = ['']}) =>
  <TableHeadBase>
    <TableRow>
      {names.map((headerName, key) =>
        <TableCell key={key}>{headerName}</TableCell>
      )}
    </TableRow>
  </TableHeadBase>

export default TableHead