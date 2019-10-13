import { withBemMod } from '@bem-react/core';
import {ISelectName} from "../index";
import './Select-Name_weight_bold.scss';

export const SelectNameWeightBold = withBemMod<ISelectName>('Select-Name', { weight: 'bold'});