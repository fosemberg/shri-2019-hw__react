import { withBemMod } from '@bem-react/core';
import {ISelect} from "../index";
import './Select_size_small.scss';

export const SelectSizeSmall = withBemMod<ISelect>('Select', { size: 'small'});