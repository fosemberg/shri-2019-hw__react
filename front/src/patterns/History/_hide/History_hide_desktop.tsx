import { withBemMod } from '@bem-react/core';
import {IHistory} from "../index";
import './History_hide_desktop.scss';

export const HistoryHideDesktop = withBemMod<IHistory>('History', { hide: 'desktop'});