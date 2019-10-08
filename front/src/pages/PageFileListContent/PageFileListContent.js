import React from 'react';
import {compose} from '@bem-react/core';
import LayoutContainerBase from "../../patterns/Layout/-Container/Layout-Container";
import TabsItemBase from "../../patterns/Tabs/-Item/Tabs-Item";
import Tabs from "../../patterns/Tabs/Tabs";
import Layout from "../../patterns/Layout/Layout";
import ThemeBase from "../../Theme/Theme";
import {ThemeColorProjectDefault} from "../../Theme/_color/Theme_color_project-default";
import {ThemeSpaceDefault} from "../../Theme/_space/Theme_space_default";
import {ThemeSizeDefault} from "../../Theme/_size/Theme_size_default";
import {ThemeGapSmall} from "../../Theme/_gap/Theme_gap_small";
import {TabsItemStateActive} from "../../patterns/Tabs/-Item/_state/Tabs-Item_state_active";
import Header from "../../components/Header/Header";
import {LayoutContainerGrow} from "../../patterns/Layout/-Container/_grow/Layout-Container_grow";
import {Link} from 'react-router-dom';
import User from "../../patterns/User/User";
import Footer from "../../patterns/Footer/Footer";
import Table from "../../patterns/Table/Table";
import {BranchInfoBorderBottom} from "../../patterns/BranchInfo/_border/BranchInfo_border_bottom";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Files from "../../components/Files/Files";
import TableHead from "../../components/TableHead/TableHead";
import BranchInfoContent from "../../patterns/BranchInfo/-Content/BranchInfo-Content";
import BranchInfo from "../../components/BranchInfo/BranchInfo";

const Theme = compose(
  ThemeSpaceDefault,
  ThemeSizeDefault,
  ThemeColorProjectDefault,
  ThemeGapSmall
)(ThemeBase);

const LayoutContainer = compose(
  LayoutContainerGrow
)(LayoutContainerBase)


const PageFileListContent = () => (
  <Theme
    space='default'
    size='default'
    color='project-default'
    gap='small'
    font='default'
  >
    <Layout>
      <Header/>
      <LayoutContainer grow>
        <BreadCrumbs/>
        <BranchInfo/>
        <Table hide='touch'>
          <TableHead/>
          <tbody>
          <Files/>
          </tbody>
        </Table>
      </LayoutContainer>
      <Footer/>
    </Layout>
  </Theme>
)

export default PageFileListContent;
