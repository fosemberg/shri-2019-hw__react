import React from 'react';
import BranchInfoHeader from "../../patterns/BranchInfo/-Header/BranchInfo-Header";
import BranchInfoName from "../../patterns/BranchInfo/-Name/BranchInfo-Name";
import BranchInfoSelect from "../../patterns/BranchInfo/-Select/BranchInfo-Select";
import BranchInfoSearch from "../../patterns/BranchInfo/-Search/BranchInfo-Search";
import {compose} from "@bem-react/core";
import {BranchInfoBorderBottom} from "../../patterns/BranchInfo/_border/BranchInfo_border_bottom";
import BranchInfoBase from "../../patterns/BranchInfo/BranchInfo";
import Tabs from "../Tabs/Tabs";
import {cnSelect} from "../../patterns/Select";
import "../../patterns/Select/Select.scss";
import "../../patterns/Select/_size/Select_size_big.scss";
import {cnArrow} from "../../patterns/Arrow";
import '../../patterns/Arrow/Arrow.scss';
import '../../patterns/Arrow/_state/Arrow_state_down.scss';
import '../../patterns/Arrow/_color/Arrow_color_secondary.scss';
import SelectArrowBase from "../../patterns/Select/-Arrow/Select-Arrow";
import {SelectArrowPositionBaseline} from "../../patterns/Select/-Arrow/_position/Select-Arrow_position_baseline";
import SelectNameBase from "../../patterns/Select/-Name/Select-Name";
import {SelectNameColorSecondary} from "../../patterns/Select/-Name/_color/Select-Name_color_secondary";
import BranchInfoContent from "./-Content/BranchInfo-Content";
import {Page} from "../../utils/types";

const BranchInfoView = compose(
  BranchInfoBorderBottom
)(BranchInfoBase);

const SelectArrow = compose(
  SelectArrowPositionBaseline,
)(SelectArrowBase);

const SelectName = compose(
  SelectNameColorSecondary
)(SelectNameBase);

interface IBranchInfoProps {
    repositoryName: string;
    page: Page;
}

const BranchInfo = ({repositoryName, page}: IBranchInfoProps) => (
  <BranchInfoView border='bottom'>
    {
      page !== Page.repositories &&
      <>
        <BranchInfoHeader>
          <BranchInfoName>
            {repositoryName}
          </BranchInfoName>
          <BranchInfoSelect className={cnSelect({size: 'big'})}>
            <SelectName color='secondary'>
              trunk
            </SelectName>
            <SelectArrow position='baseline' className={cnArrow({'state': 'down', 'color': 'secondary'})}/>
          </BranchInfoSelect>
          <BranchInfoSearch/>
        </BranchInfoHeader>
        <BranchInfoContent/>
      </>
    }
    <Tabs page={page}/>
  </BranchInfoView>
);

export default BranchInfo;