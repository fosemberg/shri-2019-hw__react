import { withBemMod } from '@bem-react/core';
import {IFile} from "../index";
import './File_type_branch.scss';

export const FileTypeBranch = withBemMod<IFile>('File', { type: 'branch'});