import React from 'react';
import {compose} from "@bem-react/core";
import {TabsItemStateActive} from "../../patterns/Tabs/-Item/_state/Tabs-Item_state_active";
import TabsItemBase from "../../patterns/Tabs/-Item/Tabs-Item";
import TabsView from "../../patterns/Tabs/Tabs";

const TabsItem = compose(
  TabsItemStateActive
)(TabsItemBase)

const Tabs = () => (
  <TabsView>
    <TabsItem state='active'>
      files
    </TabsItem>
    <TabsItem>
      branches
    </TabsItem>
  </TabsView>
);

export default Tabs;