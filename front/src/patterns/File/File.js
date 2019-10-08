import React from 'react';
import {cn} from "@bem-react/classname";
import './File.scss';

export const cnFile = cn('File');

const File = ({className, children}) => (
  <span className={cnFile({}, [className])}>{children}</span>
);

export default File;