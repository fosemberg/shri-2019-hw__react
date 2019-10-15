import { compose } from '@bem-react/core';
import React from 'react';
import { cnEditor } from '../../patterns/Editor';
import '../../patterns/Editor/_border/Editor_border_faded.scss';
import '../../patterns/Editor/Editor.scss';
import { SectionIndentBM } from '../../patterns/Section/_indent-b/Section_indent-b_m';
import { SectionIndentTM } from '../../patterns/Section/_indent-t/Section_indent-t_m';
import SectionBase from '../../patterns/Section/Section';
import { FileType } from '../../utils/types';
import DetailsContent from './-Content/DetailsContent';
import DetailsHeader from './-Header/DetailsHeader';

interface IDetails {
  data: string;
  fileName: string;
  fileType?: FileType;
}

const Section = compose(
  SectionIndentTM,
  SectionIndentBM
)(SectionBase);

const Details: React.FC<IDetails> = ({
  data,
  fileName = 'fileName',
  fileType = fileName.toUpperCase().includes('README') ||
  fileName.slice(-3) === '.md'
    ? FileType.readme
    : FileType.code,
}) => (
  <Section className={cnEditor({ border: 'faded' })} indentT="m" indentB="m">
    <DetailsHeader fileName={fileName} fileType={fileType} />
    <DetailsContent data={data} />
  </Section>
);

export default Details;
