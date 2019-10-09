import React, {memo} from "react";
import TableRow from "../../../patterns/Table/-Row/Table-Row";
import TableCell from "../../../patterns/Table/-Cell/Table-Cell";
import {Link as RouterLink} from "react-router-dom";
import {cnLink} from "../../../patterns/Link/Link";
import "../../../patterns/Link/Link.scss";
import {cnFile} from "../../../patterns/File/File";
import "../../../patterns/File/File.scss";
import "../../../patterns/File/_type/File_type_branch.scss";
import "../../../patterns/File/_type/File_type_dir.scss";
import "../../../patterns/File/_type/File_type_file.scss";
import {usePathname} from "../../../utils/helpers";

const RepositoriesTableContent = ({data}) => {
  const pathname = usePathname();
  return <>
    {
      data.map(
        (name) =>
          <TableRow key={name}>
            <TableCell>
              <RouterLink to={`${pathname}${name}`} className={cnFile({type: 'dir'}, [cnLink()])}>
                {name}
              </RouterLink>
            </TableCell>
            <TableCell colSpan={4}/>
          </TableRow>
      )
    }
  </>
};

export default memo(RepositoriesTableContent);