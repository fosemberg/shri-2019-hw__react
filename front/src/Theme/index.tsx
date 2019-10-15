import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface ITheme extends IClassNameProps {
  font?: 'default';
  size?: 'default';
  space?: 'default';
  gap?: 'small' | 'small';
  color?: 'project-default';
}

export const cnTheme = cn('Theme');
