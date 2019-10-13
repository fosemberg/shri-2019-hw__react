import { withBemMod } from '@bem-react/core';
import {IText} from "../index";
import './Text_color_diff-accented.scss';

export const TextColorDiffAccented = withBemMod<IText>('Text', { color: 'diff-accented'});