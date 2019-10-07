import React from 'react';
import {cn} from "@bem-react/classname";
import './DiffInfo-Nav.scss';

export const cnDiffInfoNav = cn('DiffInfo-Nav');

const DiffInfoNav = ({className, children}) => (
  <div className={cnDiffInfoNav({}, [className])}>{children}</div>
);

export default DiffInfoNav;