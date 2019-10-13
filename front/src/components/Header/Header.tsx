import React from 'react';
import HeaderBase from '../../patterns/Header/Header';
import SelectNameBase from '../../patterns/Select/-Name/Select-Name';
import SelectArrowBase from '../../patterns/Select/-Arrow/Select-Arrow';
import {cnArrow} from "../../patterns/Arrow";
import '../../patterns/Arrow/Arrow.scss';
import '../../patterns/Arrow/_state/Arrow_state_down.scss';
import {cnSelect} from "../../patterns/Select";
import '../../patterns/Select/Select.scss'
import {compose} from "@bem-react/core";
import HeaderLogo from "../../patterns/Header/-Logo/Header-Logo";
import HeaderSelectBase from "../../patterns/Header/-Select/Header-Select";
import {SelectNameWeightBold} from "../../patterns/Select/-Name/_weight/Select-Name_weight_bold";
import {SelectArrowPositionCenter} from "../../patterns/Select/-Arrow/_position/Select-Arrow_position_center";
import {Link} from "react-router-dom";
import {cnLink} from "../../patterns/Link";
import "../../patterns/Link/Link.scss";
import {HeaderSelectColorDefault} from "../../patterns/Header/-Select/_color/Header-Select_color_default";

interface IHeader {
    repositoryName: string;
}

const SelectName = compose(
  SelectNameWeightBold,
)(SelectNameBase);

const SelectArrow = compose(
  SelectArrowPositionCenter,
)(SelectArrowBase);

const HeaderSelect = compose(
  HeaderSelectColorDefault
)(HeaderSelectBase);

const Header: React.FC<IHeader> = ({repositoryName}) => (
    <HeaderBase>
      <Link to={'/'} className={cnLink()}>
      <HeaderLogo/>
      </Link>
      <Link to={'/'} className={cnLink()}>
      <HeaderSelect color={'default'} className={cnSelect()}>
        <SelectName weight='bold'>Repository</SelectName>
        <SelectName>{repositoryName}</SelectName>
        <SelectArrow className={cnArrow({state: 'down'})} position='center'/>
      </HeaderSelect>
      </Link>
    </HeaderBase>
);

export default Header;