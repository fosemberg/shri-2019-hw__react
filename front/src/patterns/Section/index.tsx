import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

export interface ISection extends IClassNameProps {
  indentB?: 'xxxxs' | 'm' | 'xxl' | 'xxxxl';
  indentT?: 'm' | 'xxxxs';
  spaceV?: 'xxl' | 'xxxxl';
}

export const cnSection = cn('Section');
