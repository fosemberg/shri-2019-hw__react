import { withBemMod } from '@bem-react/core';
import {IText} from "../index";
import './Text_color_diff-comment.scss';

export const TextColorDiffComment = withBemMod<IText>('Text', { color: 'diff-comment'});