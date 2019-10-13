import { withBemMod } from '@bem-react/core';
import {ISelectArrow} from "../index";
import './Select-Arrow_position_center.scss';

export const SelectArrowPositionCenter = withBemMod<ISelectArrow>('Select-Arrow', { position: 'center'});