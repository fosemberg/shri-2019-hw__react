import React from 'react';
import SectionBase from "../../patterns/Section/Section";
import {compose} from "@bem-react/core";
import {SectionIndentTM} from "../../patterns/Section/_indent-t/Section_indent-t_m";
import {SectionIndentBM} from "../../patterns/Section/_indent-b/Section_indent-b_m";
import {cnEditor} from "../../patterns/Editor/Editor";
import "../../patterns/Editor/Editor.scss";
import "../../patterns/Editor/_border/Editor_border_faded.scss";
import DetailsContent from "./-Content/DetailsContent";
import DetailsHeader from "./-Header/DetailsHeader";

const Section = compose(
  SectionIndentTM,
  SectionIndentBM,
)(SectionBase);

const Details = (
  {
    data,
    fileName = 'fileName',
    fileType = fileName.toUpperCase().includes('README') || fileName.slice(-3) ==='.md' ? 'readme' : 'code',
  }
) => (
  <Section
    className={cnEditor({border: 'faded'})}
    indentT='m'
    indentB='m'
  >
    <DetailsHeader fileName={fileName} fileType={fileType}/>
    <DetailsContent data={data}/>
  </Section>
);

export default Details;