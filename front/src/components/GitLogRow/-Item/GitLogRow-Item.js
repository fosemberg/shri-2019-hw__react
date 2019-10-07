import React from 'react';
import {cn} from "@bem-react/classname";
import './GitLogRow-Item.scss';

export const cnGitLogRowItem = cn('GitLogRowItem');

const GitLogRowItem = ({className, children}) => (
  <div className={cnGitLogRowItem({}, [className])}>{children}</div>
);

export default GitLogRowItem;