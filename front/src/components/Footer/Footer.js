import React from 'react';
import {cn} from "@bem-react/classname";
import './Footer.scss';
import FooterItem from "./-Item/Footer-Item";
import FooterVersion from "./-Version/Footer-Version";
import Link from "../Link/Link";

export const cnFooter = cn('Footer');

const Footer = ({className, children}) => (
  <div className={cnFooter({}, [className])}>
    <FooterItem>
      Trade secrets of Yandex LLC. 16, Lev Tolstoy Str.,Moscow, Russia, 119021
    </FooterItem>
    <FooterItem>
      <FooterVersion>
        UI: 0.1.15
      </FooterVersion>
      <FooterItem>
        <FooterItem>
          © 2007—2019
        </FooterItem>
        <Link href='https://www.yandex.ru' target='_blank'>Yandex</Link>
      </FooterItem>
    </FooterItem>
  </div>
);

export default Footer;