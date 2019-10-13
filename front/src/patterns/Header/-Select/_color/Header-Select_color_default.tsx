import { withBemMod } from '@bem-react/core';
import './Header-Select_color_default.scss';
import {IHeaderSelect} from "../index";

export const HeaderSelectColorDefault = withBemMod<IHeaderSelect>('Header-Select', { color: 'default'});