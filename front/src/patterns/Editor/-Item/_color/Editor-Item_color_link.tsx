import { withBemMod } from '@bem-react/core';
import {IEditorItem} from "../index";
import './Editor-Item_color_link.scss';

export const EditorItemColorLink = withBemMod<IEditorItem>('Editor-Item', { color: 'link'});