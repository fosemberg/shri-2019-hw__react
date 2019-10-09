import React, {useState, useEffect, memo} from "react";
import TableRow from "../../../patterns/Table/-Row/Table-Row";
import TableCell from "../../../patterns/Table/-Cell/Table-Cell";
import {Link as RouterLink, withRouter} from "react-router-dom";
import LinkBase from "../../../patterns/Link/Link";
import {cnLink} from "../../../patterns/Link/Link";
import "../../../patterns/Link/Link.scss";
import {cnFile} from "../../../patterns/File/File";
import "../../../patterns/File/File.scss";
import "../../../patterns/File/_type/File_type_branch.scss";
import "../../../patterns/File/_type/File_type_dir.scss";
import "../../../patterns/File/_type/File_type_file.scss";
import User from "../../../patterns/User/User";
import {usePathname} from "../../../utils/helpers";

const RepositoriesTableContent = ({data}) => {
  const pathname = usePathname();
  return <>
    {
      data.map(
        (name, key) =>
          <TableRow key={key}>
            <TableCell>
              <RouterLink to={`${pathname}${name}`} className={cnFile({type: 'dir'}, [cnLink()])}>
                <div className="file__icon file__icon_type_${fileType}"></div>
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