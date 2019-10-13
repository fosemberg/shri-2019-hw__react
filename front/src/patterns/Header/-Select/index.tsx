import { IClassNameProps } from '@bem-react/core';
import {cn} from "@bem-react/classname";

export interface IHeaderSelect extends IClassNameProps {
    color?: 'default';
}

export const cnHeaderSelect = cn('Header-Select');
