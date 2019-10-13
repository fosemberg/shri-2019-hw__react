import { withBemMod } from '@bem-react/core';
import {IEditorItem} from "../index";
import './Editor-Item_color_comment.scss';

export const EditorItemColorComment = withBemMod<IEditorItem>('Editor-Item', { color: 'comment'});