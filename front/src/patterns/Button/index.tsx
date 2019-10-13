import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IButton extends IClassNameProps {
  color?: 'default';
  width?: 'full';
}

export const cnButton = cn('Button');
