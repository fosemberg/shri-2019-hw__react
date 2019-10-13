import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IText extends IClassNameProps {
  size?: 'xs';
  color?: 'purple' | 'success' | 'accented' | 'reserved' | 'diff-comment' | 'diff-accented';
  indentR?: 'm';
}

export const cnText = cn('Text');
