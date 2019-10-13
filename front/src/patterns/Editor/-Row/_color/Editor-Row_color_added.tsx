import { withBemMod } from '@bem-react/core';
import {IEditorRow} from "../index";
import './Editor-Row_color_added.scss';

export const EditorRowColorAdded = withBemMod<IEditorRow>('Editor-Row', { color: 'added'});