import React from 'react';
import {cn} from "@bem-react/classname";
import './Text.scss';

export const cnText = cn('Text');

const Text = ({className, children}) => (
  <div className={cnText({}, [className])}>{children}</div>
);

export default Text;