import { withBemMod } from '@bem-react/core';
import {IEditorRow} from "../index";
import './Editor-Row_color_deleted.scss';

export const EditorRowColorDeleted = withBemMod<IEditorRow>('Editor-Row', { color: 'deleted'});