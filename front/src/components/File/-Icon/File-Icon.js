import React from 'react';
import {cn} from "@bem-react/classname";
import './File-Icon.scss';

export const cnFileIcon = cn('File-Icon');

const FileIcon = ({className, children}) => (
  <div className={cnFileIcon({}, [className])}>{children}</div>
);

export default FileIcon;