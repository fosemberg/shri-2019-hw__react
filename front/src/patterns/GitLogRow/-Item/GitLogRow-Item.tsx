import React from 'react';
import {cnGitLogRowItem, IGitLogRowItem} from "./index";
import './GitLogRow-Item.scss';

const GitLogRowItem: React.FC<IGitLogRowItem> = ({className, children}) => (
  <div className={cnGitLogRowItem({}, [className])}>{children}</div>
);

export default GitLogRowItem;