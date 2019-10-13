import React from 'react';
import {cn} from "@bem-react/classname";
import './Text.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnText = cn('Text');

const Text: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnText({}, [className])}>{children}</div>
);

export default Text;