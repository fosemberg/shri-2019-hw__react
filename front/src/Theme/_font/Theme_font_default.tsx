import { withBemMod } from '@bem-react/core';
import { ITheme } from '../index';
import './Theme_font_default.scss';

export const ThemeFontDefault = withBemMod<ITheme>('Theme', {
  font: 'default',
});
