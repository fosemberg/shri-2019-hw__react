import React from 'react';
import './GitLogRow-Item.scss';
import { cnGitLogRowItem, IGitLogRowItem } from './index';

const GitLogRowItem: React.FC<IGitLogRowItem> = ({ className, children }) => (
  <div className={cnGitLogRowItem({}, [className])}>{children}</div>
);

export default GitLogRowItem;
