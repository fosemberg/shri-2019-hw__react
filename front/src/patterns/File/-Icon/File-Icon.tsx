import React from 'react';
import './File-Icon.scss';
import { cnFileIcon, IFileIcon } from './index';

const FileIcon: React.FC<IFileIcon> = ({ className, children }) => (
  <div className={cnFileIcon({}, [className])}>{children}</div>
);

export default FileIcon;
