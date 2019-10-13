import { withBemMod } from '@bem-react/core';
import {IText} from "../index";
import './Text_color_success.scss';

export const TextColorSuccess = withBemMod<IText>('Text', { color: 'success'});