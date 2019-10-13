import { withBemMod } from '@bem-react/core';
import './Layout-Container_grow.scss';
import {ILayoutContainer} from "../index";

export const LayoutContainerGrow = withBemMod<ILayoutContainer>('Layout-Container', { grow: true});