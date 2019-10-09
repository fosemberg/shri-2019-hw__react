import React from 'react';
import {compose} from "@bem-react/core";
import {TabsItemStateActive} from "../../patterns/Tabs/-Item/_state/Tabs-Item_state_active";
import TabsItemBase from "../../patterns/Tabs/-Item/Tabs-Item";
import TabsView from "../../patterns/Tabs/Tabs";
import {Page} from "../../utils/types";

const TabsItem = compose(
  TabsItemStateActive
)(TabsItemBase)

const Tabs = ({page}) => (
  <TabsView>
    <TabsItem state='active'>
      {
        page === Page.FILES ? 'files' :
        page === Page.DETAILS ? 'details' :
        page === Page.REPOSITORIES ? 'repositories' :
        ''
      }
    </TabsItem>
    <TabsItem>
      {
        page === Page.FILES ? 'branches' :
        page === Page.DETAILS ? 'history' :
        ''
      }
    </TabsItem>
  </TabsView>
);

export default Tabs;