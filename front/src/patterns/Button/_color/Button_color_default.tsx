import { withBemMod } from '@bem-react/core';
import {IButton} from "../index";
import './Button_color_default.scss';

export const ButtonColorDefault = withBemMod<IButton>('Button', { color: 'default'});