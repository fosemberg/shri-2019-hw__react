import { withBemMod } from '@bem-react/core';
import {ISelectName} from "../index";
import './Select-Name_color_secondary.scss';

export const SelectNameColorSecondary = withBemMod<ISelectName>('Select-Name', { color: 'secondary'});