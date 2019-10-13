import { withBemMod } from '@bem-react/core';
import {ISection} from "../index";
import './Section_indent-b_m.scss';

export const SectionIndentBM = withBemMod<ISection>('Section', { indentB: 'm'});