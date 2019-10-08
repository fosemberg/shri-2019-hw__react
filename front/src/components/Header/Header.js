import React from 'react';
import HeaderBase from '../../patterns/Header/Header';
import SelectNameBase from '../../patterns/Select/-Name/Select-Name';
import SelectArrowBase from '../../patterns/Select/-Arrow/Select-Arrow';
import {cnArrow} from "../../patterns/Arrow/Arrow";
import '../../patterns/Arrow/Arrow.scss';
import '../../patterns/Arrow/_state/Arrow_state_down.scss';
import {cnSelect} from "../../patterns/Select/Select";
import '../../patterns/Select/Select.scss'
import {compose} from "@bem-react/core";
import HeaderLogo from "../../patterns/Header/-Logo/Header-Logo";
import HeaderSelect from "../../patterns/Header/-Select/Header-Select";
import {SelectNameWeightBold} from "../../patterns/Select/-Name/_weight/Select-Name_weight_bold";
import {SelectArrowPositionCenter} from "../../patterns/Select/-Arrow/_position/Select-Arrow_position_center";

const SelectName = compose(
  SelectNameWeightBold,
)(SelectNameBase);

const SelectArrow = compose(
  SelectArrowPositionCenter,
)(SelectArrowBase)

const Header = () => (
  <HeaderBase>
    <HeaderLogo/>
    <HeaderSelect className={cnSelect()}>
      <SelectName weight='bold'>Repository</SelectName>
      <SelectName>Arc</SelectName>
      <SelectArrow className={cnArrow({state: 'down'})} position='center'/>
    </HeaderSelect>
  </HeaderBase>
);

export default Header;