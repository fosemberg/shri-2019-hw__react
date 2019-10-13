import { withBemMod } from '@bem-react/core';
import {ITabsItem} from "../index";
import './Tabs-Item_state_active.scss';

export const TabsItemStateActive = withBemMod<ITabsItem>('Tabs-Item', { state: 'active'});