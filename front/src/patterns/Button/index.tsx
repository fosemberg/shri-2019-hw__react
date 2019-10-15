import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IButton extends IClassNameProps {
  color?: 'default';
  width?: 'full';
}

export const cnButton = cn('Button');
