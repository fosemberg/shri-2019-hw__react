import { withBemMod } from '@bem-react/core';
import {ITheme} from "../index";
import './Theme_size_default.scss';

export const ThemeSizeDefault = withBemMod<ITheme>('Theme', { size: 'default'});