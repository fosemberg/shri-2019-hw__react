import React from 'react';
import {cnGitLogRow, IGitLogRow} from "./index";
import './GitLogRow.scss';

const GitLogRow: React.FC<IGitLogRow> = ({className, children}) => (
  <div className={cnGitLogRow({}, [className])}>{children}</div>
);

export default GitLogRow;