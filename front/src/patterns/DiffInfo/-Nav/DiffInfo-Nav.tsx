import React from 'react';
import './DiffInfo-Nav.scss';
import { cnDiffInfoNav, IDiffInfoNav } from './index';

const DiffInfoNav: React.FC<IDiffInfoNav> = ({ className, children }) => (
  <div className={cnDiffInfoNav({}, [className])}>{children}</div>
);

export default DiffInfoNav;
