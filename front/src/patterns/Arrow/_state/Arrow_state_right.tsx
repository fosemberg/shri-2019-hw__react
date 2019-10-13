import { withBemMod } from '@bem-react/core';
import {IArrow} from "../index";
import './Arrow_state_right.scss';

export const ArrowStateRight = withBemMod<IArrow>('Arrow', { state: 'right'});