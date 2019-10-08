import React from 'react';
import SectionBase from "../../patterns/Section/Section";
import {compose} from "@bem-react/core";
import {SectionIndentTM} from "../../patterns/Section/_indent-t/Section_indent-t_m";
import {SectionIndentBM} from "../../patterns/Section/_indent-b/Section_indent-b_m";
import {cnEditor} from "../../patterns/Editor/Editor";
import "../../patterns/Editor/Editor.scss";
import "../../patterns/Editor/_border/Editor_border_faded.scss";
import EditorBodyBase from "../../patterns/Editor/-Body/Editor-Body";
import {EditorBodyColorMain} from "../../patterns/Editor/-Body/_color/Editor-Body_color_main";
import DetailsContent from "./-Content/DetailsContent";
import DetailsHeader from "./-Header/DetailsHeader";

const Section = compose(
  SectionIndentTM,
  SectionIndentBM,
)(SectionBase);

const EditorBody = compose(
  EditorBodyColorMain
)(EditorBodyBase);

const Details = ({data, fileName = 'fileName'}) => (
  <Section
    className={cnEditor({border: 'faded'})}
    indentT='m'
    indentB='m'
  >
    <DetailsHeader fileName={fileName}/>
    <DetailsContent data={data}/>
  </Section>
)

export default Details;