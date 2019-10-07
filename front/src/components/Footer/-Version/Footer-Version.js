import React from 'react';
import {cn} from "@bem-react/classname";
import './Footer-Version.scss';

export const cnFooterVersion = cn('Footer-Version');

const FooterVersion = ({className, children}) => (
  <div className={cnFooterVersion({}, [className])}>{children}</div>
);

export default FooterVersion;