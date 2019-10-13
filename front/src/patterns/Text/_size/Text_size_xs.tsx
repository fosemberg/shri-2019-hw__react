import { withBemMod } from '@bem-react/core';
import {IText} from "../index";
import './Text_size_xs.scss';

export const TextSizeXs = withBemMod<IText>('Text', { size: 'xs'});