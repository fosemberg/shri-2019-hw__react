import React from 'react';
import SectionBase from "../../patterns/Section/Section";
import {compose} from "@bem-react/core";
import {SectionIndentTM} from "../../patterns/Section/_indent-t/Section_indent-t_m";
import {SectionIndentBM} from "../../patterns/Section/_indent-b/Section_indent-b_m";
import {cnEditor} from "../../patterns/Editor/Editor";
import "../../patterns/Editor/Editor.scss";
import "../../patterns/Editor/_border/Editor_border_faded.scss";
import EditorHeaderBase from "../../patterns/Editor/-Header/Editor-Header";
import {EditorHeaderSpaceHM} from "../../patterns/Editor/-Header/_space-h/Editor-Header_space-h_m";
import {EditorHeaderSpaceVS} from "../../patterns/Editor/-Header/_space-v/Editor-Header_space-v_s";


const Section = compose(
  SectionIndentTM,
  SectionIndentBM,
)(SectionBase);

const EditorHeader = compose(
  EditorHeaderSpaceHM,
  EditorHeaderSpaceVS
)(EditorHeaderBase);


const Details = ({data}) => (
  <Section className={cnEditor({border: 'faded'})}>
    <EditorHeader>
      ya.make
    </EditorHeader>
    {data}
  </Section>
)

export default Details;