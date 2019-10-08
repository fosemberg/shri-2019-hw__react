import React from "react";
import TableRow from "../../patterns/Table/-Row/Table-Row";
import TableCell from "../../patterns/Table/-Cell/Table-Cell";
import TableHeadBase from "../../patterns/Table/-Head/Table-Head";

const headerMock = [
  'name',
  'Last commit',
  'Commit message',
  'Committer',
  'Updated'
]

const TableHead = () =>
  <TableHeadBase>
    <TableRow>
      {headerMock.map(headerName =>
        <TableCell key={headerName}>{headerName}</TableCell>
      )}
    </TableRow>
  </TableHeadBase>

export default TableHead