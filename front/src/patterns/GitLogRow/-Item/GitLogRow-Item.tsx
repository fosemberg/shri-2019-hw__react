import React from 'react';
import {cn} from "@bem-react/classname";
import './GitLogRow-Item.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnGitLogRowItem = cn('GitLogRow-Item');

const GitLogRowItem: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnGitLogRowItem({}, [className])}>{children}</div>
);

export default GitLogRowItem;