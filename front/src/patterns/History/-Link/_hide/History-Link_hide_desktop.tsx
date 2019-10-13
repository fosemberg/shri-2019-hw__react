import { withBemMod } from '@bem-react/core';
import {IHistoryLink} from "../index";
import './History-Link_hide_desktop.scss';

export const HistoryLinkHideDesktop = withBemMod<IHistoryLink>('History-Link', { hide: 'desktop'});