import { withBemMod } from '@bem-react/core';
import {IEditorItem} from "../index";
import './Editor-Item_weight_bold.scss';

export const EditorItemWeightBold = withBemMod<IEditorItem>('Editor-Item', { weight: 'bold'});