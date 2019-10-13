import React from 'react';
import {cnUser, IUser} from "./index";
import './User.scss';

const User: React.FC<IUser> = ({className, children}) => (
  <div className={cnUser({}, [className])}>{children}</div>
);

export default User;