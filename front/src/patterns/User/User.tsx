import React from 'react';
import {cn} from "@bem-react/classname";
import './User.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnUser = cn('User');

const User: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnUser({}, [className])}>{children}</div>
);

export default User;