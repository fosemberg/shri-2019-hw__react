import { withBemMod } from '@bem-react/core';
import {ITheme} from "../index";
import './Theme_gap_small.scss';

export const ThemeGapSmall = withBemMod<ITheme>('Theme', { gap: 'small'});