import React from 'react';
import { cnSection, ISection } from './index';
import './Section.scss';

const Section: React.FC<ISection> = ({ className, children }) => (
  <div className={cnSection({}, [className])}>{children}</div>
);

export default Section;
