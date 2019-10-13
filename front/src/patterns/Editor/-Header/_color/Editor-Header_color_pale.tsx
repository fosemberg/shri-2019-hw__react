import { withBemMod } from '@bem-react/core';
import {IEditorHeader} from "../index";
import './Editor-Header_color_pale.scss';

export const EditorHeaderColorPale = withBemMod<IEditorHeader>('Editor-Header', { color: 'pale'});