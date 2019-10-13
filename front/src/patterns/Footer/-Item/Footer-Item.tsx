import React from 'react';
import {cn} from "@bem-react/classname";
import './Footer-Item.scss';

export const cnFooterItem = cn('Footer-Item');

const FooterItem = ({className, children}) => (
  <div className={cnFooterItem({}, [className])}>{children}</div>
);

export default FooterItem;