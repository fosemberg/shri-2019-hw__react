import React from 'react';
import {cn} from "@bem-react/classname";
import './Footer-Version.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnFooterVersion = cn('Footer-Version');

const FooterVersion: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnFooterVersion({}, [className])}>{children}</div>
);

export default FooterVersion;