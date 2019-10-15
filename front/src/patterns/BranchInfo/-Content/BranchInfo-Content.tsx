import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import React from 'react';
import './BranchInfo-Content.scss';

export const cnBranchInfoContent = cn('BranchInfo-Content');

const BranchInfoContent: React.FC<IClassNameProps> = ({
  className,
  children,
}) => <div className={cnBranchInfoContent({}, [className])}>{children}</div>;

export default BranchInfoContent;
