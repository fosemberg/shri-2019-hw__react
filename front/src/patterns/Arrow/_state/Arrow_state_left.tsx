import { withBemMod } from '@bem-react/core';
import { IArrow } from '../index';
import './Arrow_state_left.scss';

export const ArrowStateLeft = withBemMod<IArrow>('Arrow', { state: 'left' });
