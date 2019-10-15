import React from 'react';
import './Footer-Version.scss';
import { cnFooterVersion, IFooterVersion } from './index';

const FooterVersion: React.FC<IFooterVersion> = ({ className, children }) => (
  <div className={cnFooterVersion({}, [className])}>{children}</div>
);

export default FooterVersion;
