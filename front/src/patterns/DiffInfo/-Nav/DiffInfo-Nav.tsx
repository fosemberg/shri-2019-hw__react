import React from 'react';
import {cnDiffInfoNav, IDiffInfoNav} from "./index";
import './DiffInfo-Nav.scss';

const DiffInfoNav: React.FC<IDiffInfoNav> = ({className, children}) => (
  <div className={cnDiffInfoNav({}, [className])}>{children}</div>
);

export default DiffInfoNav;