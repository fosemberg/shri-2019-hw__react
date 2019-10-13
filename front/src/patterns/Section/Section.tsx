import React from 'react';
import {cn} from "@bem-react/classname";
import './Section.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnSection = cn('Section');

const Section: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnSection({}, [className])}>{children}</div>
);

export default Section;