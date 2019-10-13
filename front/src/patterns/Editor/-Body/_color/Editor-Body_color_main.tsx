import { withBemMod } from '@bem-react/core';
import {IEditorBody} from "../index";
import './Editor-Body_color_main.scss';

export const EditorBodyColorMain = withBemMod<IEditorBody>('Editor-Body', { color: 'main'});