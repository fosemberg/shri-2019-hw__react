import React from 'react';
import {cn} from "@bem-react/classname";
import './File-Icon.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnFileIcon = cn('File-Icon');

const FileIcon: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnFileIcon({}, [className])}>{children}</div>
);

export default FileIcon;