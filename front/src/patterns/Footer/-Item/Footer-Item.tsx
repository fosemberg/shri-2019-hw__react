import React from 'react';
import {cn} from "@bem-react/classname";
import './Footer-Item.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnFooterItem = cn('Footer-Item');

const FooterItem: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnFooterItem({}, [className])}>{children}</div>
);

export default FooterItem;