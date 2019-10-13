import { withBemMod } from '@bem-react/core';
import {ILink} from "../index";
import './Link_color_secondary.scss';

export const LinkColorSecondary = withBemMod<ILink>('Link', { color: 'secondary'});