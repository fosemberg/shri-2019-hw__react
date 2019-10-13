import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IEditorNumber extends IClassNameProps {
  width?: 's';
  spaceL?: 'touch';
}

export const cnEditorNumber = cn('Editor-Number');
