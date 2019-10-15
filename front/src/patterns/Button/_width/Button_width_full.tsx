import { withBemMod } from '@bem-react/core';
import { IButton } from '../index';
import './Button_width_full.scss';

export const ButtonWidthFull = withBemMod<IButton>('Button', { width: 'full' });
