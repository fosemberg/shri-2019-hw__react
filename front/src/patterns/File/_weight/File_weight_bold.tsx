import { withBemMod } from '@bem-react/core';
import {IFile} from "../index";
import './File_weight_bold.scss';

export const FileWeightBold = withBemMod<IFile>('File', { weight: 'bold'});