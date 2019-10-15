import React from 'react';
import './Footer-Item.scss';
import { cnFooterItem, IFooterItem } from './index';

const FooterItem: React.FC<IFooterItem> = ({ className, children }) => (
  <div className={cnFooterItem({}, [className])}>{children}</div>
);

export default FooterItem;
