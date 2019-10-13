import { withBemMod } from '@bem-react/core';
import {IText} from "../index";
import './Text_color_reserved.scss';

export const TextColorReserved = withBemMod<IText>('Text', { color: 'reserved'});