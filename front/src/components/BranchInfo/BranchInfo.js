import React from 'react';
import BranchInfoHeader from "../../patterns/BranchInfo/-Header/BranchInfo-Header";
import BranchInfoName from "../../patterns/BranchInfo/-Name/BranchInfo-Name";
import BranchInfoSelect from "../../patterns/BranchInfo/-Select/BranchInfo-Select";
import BranchInfoSearch from "../../patterns/BranchInfo/-Search/BranchInfo-Search";
import BranchInfoContent from "../../patterns/BranchInfo/-Content/BranchInfo-Content";
import User from "../../patterns/User/User";
import {compose} from "@bem-react/core";
import {BranchInfoBorderBottom} from "../../patterns/BranchInfo/_border/BranchInfo_border_bottom";
import BranchInfoBase from "../../patterns/BranchInfo/BranchInfo";
import Link from "../../patterns/Link/Link";
import Tabs from "../Tabs/Tabs";
import {cnSelect} from "../../patterns/Select/Select";
import "../../patterns/Select/Select.scss";
import "../../patterns/Select/_size/Select_size_big.scss";


const BranchInfoView = compose(
  BranchInfoBorderBottom
)(BranchInfoBase)


const BranchInfo = () => (
  <BranchInfoView border='bottom'>
    <BranchInfoHeader>
      <BranchInfoName>
        arcadia
      </BranchInfoName>
      <BranchInfoSelect className={cnSelect({size: 'big'})}>
<span color='secondary'>
trunk
</span>
        <i position='baseline'
           mix={{'block': 'arrow', 'mods': {'state': 'down', 'color': 'secondary'}}}/>
      </BranchInfoSelect>
      <BranchInfoSearch>
      </BranchInfoSearch>
    </BranchInfoHeader>
    <BranchInfoContent>
      {' Last commit '}
      <Link>c4d248</Link>
      {' on '}
      <Link>20 Oct 2017, 12:24</Link>
      {' by '}
      <User>robot-srch-releaser</User>
    </BranchInfoContent>
    <Tabs/>
  </BranchInfoView>
);

export default BranchInfo;