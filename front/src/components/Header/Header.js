import React from 'react';
import {cn} from "@bem-react/classname";
import './Header.scss';
import HeaderLogo from "./-Logo/Header-Logo";
import HeaderSelect from "./-Select/Header-Select";
import {compose} from "@bem-react/core";
import SelectNameBase from "../Select/-Name/Select-Name";
import {SelectNameWeightBold} from "../Select/-Name/_weight/Select-Name_weight_bold";
import SelectArrowBase from "../Select/-Arrow/Select-Arrow";
import {SelectArrowPositionCenter} from "../Select/-Arrow/_position/Select-Arrow_position_center";
import {cnArrow} from "../Arrow/Arrow";
import '../Arrow/Arrow.scss';
import '../Arrow/_state/Arrow_state_down.scss';
import {cnSelect} from "../Select/Select";
import '../Select/Select.scss'


export const cnHeader = cn('Header');

const SelectName = compose(
  SelectNameWeightBold
)(SelectNameBase);

const SelectArrow = compose(
  SelectArrowPositionCenter,
)(SelectArrowBase)

const Header = ({className, children}) => (
  <div className={cnHeader({}, [className])}>
    <HeaderLogo/>
    <HeaderSelect className={cnSelect()}>
      <SelectName>Repository</SelectName>
      Arc
      <SelectArrow className={cnArrow({state: 'down'})} position='center'/>
    </HeaderSelect>
  </div>
);

export default Header;