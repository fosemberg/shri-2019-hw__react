import { withBemMod } from '@bem-react/core';
import {IArrow} from "../index";
import './Arrow_color_secondary.scss';

export const ArrowColorSecondary = withBemMod<IArrow>('Arrow', { color: 'secondary'});