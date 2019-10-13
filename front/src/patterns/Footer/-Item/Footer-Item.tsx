import React from 'react';
import {cnFooterItem, IFooterItem} from "./index";
import './Footer-Item.scss';

const FooterItem: React.FC<IFooterItem> = ({className, children}) => (
  <div className={cnFooterItem({}, [className])}>{children}</div>
);

export default FooterItem;