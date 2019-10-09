import React from "react";
import TableRow from "../../patterns/Table/-Row/Table-Row";
import TableCell from "../../patterns/Table/-Cell/Table-Cell";
import TableHeadBase from "../../patterns/Table/-Head/Table-Head";

const TableHead = ({names = ['']}) =>
  <TableHeadBase>
    <TableRow>
      {names.map(headerName =>
        <TableCell key={headerName}>{headerName}</TableCell>
      )}
    </TableRow>
  </TableHeadBase>

export default TableHead