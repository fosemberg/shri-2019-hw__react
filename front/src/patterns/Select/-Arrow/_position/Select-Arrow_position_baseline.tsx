import { withBemMod } from '@bem-react/core';
import { ISelectArrow } from '../index';
import './Select-Arrow_position_baseline.scss';

export const SelectArrowPositionBaseline = withBemMod<ISelectArrow>(
  'Select-Arrow',
  { position: 'baseline' }
);
