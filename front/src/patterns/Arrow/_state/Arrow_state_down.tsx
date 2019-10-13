import { withBemMod } from '@bem-react/core';
import {IArrow} from "../index";
import './Arrow_state_down.scss';

export const ArrowStateDown = withBemMod<IArrow>('Arrow', { state: 'down'});