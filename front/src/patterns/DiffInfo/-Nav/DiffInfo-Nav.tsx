import React from 'react';
import {cn} from "@bem-react/classname";
import './DiffInfo-Nav.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnDiffInfoNav = cn('DiffInfo-Nav');

const DiffInfoNav: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnDiffInfoNav({}, [className])}>{children}</div>
);

export default DiffInfoNav;