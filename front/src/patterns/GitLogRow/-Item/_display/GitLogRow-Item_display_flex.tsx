import { withBemMod } from '@bem-react/core';
import {IGitLogRowItem} from "../index";
import './GitLogRow-Item_display_flex.scss';

export const GitLogRowItemDisplayFlex = withBemMod<IGitLogRowItem>('GitLogRow-Item', { display: 'flex'});