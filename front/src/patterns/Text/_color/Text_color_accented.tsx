import { withBemMod } from '@bem-react/core';
import {IText} from "../index";
import './Text_color_accented.scss';

export const TextColorAccented = withBemMod<IText>('Text', { color: 'accented'});