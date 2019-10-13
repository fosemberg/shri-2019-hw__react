import React from 'react';
import {cnFooterVersion, IFooterVersion} from "./index";
import './Footer-Version.scss';

const FooterVersion: React.FC<IFooterVersion> = ({className, children}) => (
  <div className={cnFooterVersion({}, [className])}>{children}</div>
);

export default FooterVersion;