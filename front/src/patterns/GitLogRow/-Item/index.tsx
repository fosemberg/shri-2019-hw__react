import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IGitLogRowItem extends IClassNameProps {
  padding?: 'both';
  display?: 'flex';
}

export const cnGitLogRowItem = cn('GitLogRow-Item');
