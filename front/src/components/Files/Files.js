import React from "react";
import TableHead from "../TableHead/TableHead";
import FilesContent from "./-Content/FilesContent";
import Table from "../../patterns/Table/Table";

const Files = () => (
  <Table>
    <TableHead/>
    <tbody>
    <FilesContent/>
    </tbody>
  </Table>
);

export default Files;