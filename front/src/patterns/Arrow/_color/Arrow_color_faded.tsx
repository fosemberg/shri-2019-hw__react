import { withBemMod } from '@bem-react/core';
import { IArrow } from '../index';
import './Arrow_color_faded.scss';

export const ArrowColorFaded = withBemMod<IArrow>('Arrow', { color: 'faded' });
