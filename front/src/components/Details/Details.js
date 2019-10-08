import React from 'react';
import SectionBase from "../../patterns/Section/Section";
import {compose} from "@bem-react/core";
import {SectionIndentTM} from "../../patterns/Section/_indent-t/Section_indent-t_m";
import {SectionIndentBM} from "../../patterns/Section/_indent-b/Section_indent-b_m";
import {cnEditor} from "../../patterns/Editor/Editor";
import "../../patterns/Editor/Editor.scss";
import "../../patterns/Editor/_border/Editor_border_faded.scss";



const Section = compose(
  SectionIndentTM,
  SectionIndentBM,
)(SectionBase)

const Details = ({data}) => (
  <Section className={cnEditor({border: 'faded'})}>
    {data}
  </Section>
)

export default Details;