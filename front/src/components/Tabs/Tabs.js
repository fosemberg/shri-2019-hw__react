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
        page === Page.files ? 'files' :
        page === Page.details ? 'details' :
        page === Page.repositories ? 'repositories' :
        ''
      }
    </TabsItem>
    <TabsItem>
      {
        page === Page.files ? 'branches' :
        page === Page.details ? 'history' :
        ''
      }
    </TabsItem>
  </TabsView>
);

export default Tabs;