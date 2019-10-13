import React from 'react';
import {cn} from "@bem-react/classname";
import './File.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnFile = cn('File');

const File: React.FC<IClassNameProps> = ({className, children}) => (
  <span className={cnFile({}, [className])}>{children}</span>
);

export default File;