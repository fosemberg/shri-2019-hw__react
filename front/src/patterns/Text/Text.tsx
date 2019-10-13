import React from 'react';
import {cnText, IText} from "./index";
import './Text.scss';

const Text: React.FC<IText> = ({className, children}) => (
  <div className={cnText({}, [className])}>{children}</div>
);

export default Text;