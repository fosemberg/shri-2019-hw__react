import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface ILayoutContainer extends IClassNameProps {
  grow?: true;
  align?: 'center';
  size?: 's' | 'm';
  spaceV?: 'xxxxl' | 'xxxxxl';
  indentB?: 'xxl' | 'xxxxl';
}

export const cnLayoutContainer = cn('Layout-Container');
