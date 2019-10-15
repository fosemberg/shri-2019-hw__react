import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IGitLogRow extends IClassNameProps {
  border?: 'bottom';
  padding?: 'both';
  hide?: 'desktop';
}

export const cnGitLogRow = cn('GitLogRow');
