import React from 'react';
import {cn} from "@bem-react/classname";
import './Section.scss';

export const cnSection = cn('Section');

const Section = ({className, children}) => (
  <div className={cnSection({}, [className])}>{children}</div>
);

export default Section;