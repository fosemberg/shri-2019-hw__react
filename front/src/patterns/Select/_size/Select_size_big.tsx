import { withBemMod } from '@bem-react/core';
import {ISelect} from "../index";
import './Select_size_big.scss';

export const SelectSizeBig = withBemMod<ISelect>('Select', { size: 'big'});