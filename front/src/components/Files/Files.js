import React from "react";
import TableHead from "../TableHead/TableHead";
import FilesContent from "./-Content/FilesContent";
import Table from "../../patterns/Table/Table";

const Files = ({data}) => (
  <Table>
    <TableHead/>
    <tbody>
    <FilesContent data={data}/>
    </tbody>
  </Table>
);

export default Files;