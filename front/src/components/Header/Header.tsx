import { compose } from '@bem-react/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { cnArrow } from '../../patterns/Arrow';
import '../../patterns/Arrow/_state/Arrow_state_down.scss';
import '../../patterns/Arrow/Arrow.scss';
import HeaderLogo from '../../patterns/Header/-Logo/Header-Logo';
import { HeaderSelectColorDefault } from '../../patterns/Header/-Select/_color/Header-Select_color_default';
import HeaderSelectBase from '../../patterns/Header/-Select/Header-Select';
import HeaderBase from '../../patterns/Header/Header';
import { cnLink } from '../../patterns/Link';
import '../../patterns/Link/Link.scss';
import { cnSelect } from '../../patterns/Select';
import { SelectArrowPositionCenter } from '../../patterns/Select/-Arrow/_position/Select-Arrow_position_center';
import SelectArrowBase from '../../patterns/Select/-Arrow/Select-Arrow';
import { SelectNameWeightBold } from '../../patterns/Select/-Name/_weight/Select-Name_weight_bold';
import SelectNameBase from '../../patterns/Select/-Name/Select-Name';
import '../../patterns/Select/Select.scss';

interface IHeader {
  repositoryName: string;
}

const SelectName = compose(SelectNameWeightBold)(SelectNameBase);

const SelectArrow = compose(SelectArrowPositionCenter)(SelectArrowBase);

const HeaderSelect = compose(HeaderSelectColorDefault)(HeaderSelectBase);

const Header: React.FC<IHeader> = ({ repositoryName }) => (
  <HeaderBase>
    <Link to={'/'} className={cnLink()}>
      <HeaderLogo />
    </Link>
    <Link to={'/'} className={cnLink()}>
      <HeaderSelect color={'default'} className={cnSelect()}>
        <SelectName weight="bold">Repository</SelectName>
        <SelectName>{repositoryName}</SelectName>
        <SelectArrow className={cnArrow({ state: 'down' })} position="center" />
      </HeaderSelect>
    </Link>
  </HeaderBase>
);

export default Header;
