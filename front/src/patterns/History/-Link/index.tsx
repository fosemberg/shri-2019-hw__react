import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface IHistoryLink extends IClassNameProps {
  hide?: 'desktop';
}

export const cnHistoryLink = cn('History-Link');
