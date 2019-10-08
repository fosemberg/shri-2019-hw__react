import React from 'react';
import {cn} from "@bem-react/classname";
import './User.scss';

export const cnUser = cn('User');

const User = ({className, children}) => (
  <div className={cnUser({}, [className])}>{children}</div>
);

export default User;