import { withBemMod } from '@bem-react/core';
import {ILink} from "../index";
import './Link_hide_touch.scss';

export const LinkHideTouch = withBemMod<ILink>('Link', { hide: 'touch'});