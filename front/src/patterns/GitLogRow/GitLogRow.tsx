import React from 'react';
import {cn} from "@bem-react/classname";
import './GitLogRow.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnGitLogRow = cn('GitLogRow');

const GitLogRow: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnGitLogRow({}, [className])}>{children}</div>
);

export default GitLogRow;