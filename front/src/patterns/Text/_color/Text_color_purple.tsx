import { withBemMod } from '@bem-react/core';
import {IText} from "../index";
import './Text_color_purple.scss';

export const TextColorPurple = withBemMod<IText>('Text', { color: 'purple'});