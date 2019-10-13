import React from 'react';
import {cnFileIcon, IFileIcon} from "./index";
import './File-Icon.scss';

const FileIcon: React.FC<IFileIcon> = ({className, children}) => (
  <div className={cnFileIcon({}, [className])}>{children}</div>
);

export default FileIcon;