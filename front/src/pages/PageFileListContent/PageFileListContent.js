import React from 'react';
import {compose} from '@bem-react/core';
import BranchInfo from "../../components/BranchInfo/BranchInfo";
import LayoutContainerBase from "../../components/Layout/-Container/Layout-Container";
import BreadCrumbsBase from "../../components/BreadCrumbs/BreadCrumbs";
import BreadCrumbsItem from "../../components/BreadCrumbs/-Item/BreadCrumbs-Item";
import BranchInfoHeader from "../../components/BranchInfo/-Header/BranchInfo-Header";
import BranchInfoName from "../../components/BranchInfo/-Name/BranchInfo-Name";
import BranchInfoSelect from "../../components/BranchInfo/-Select/BranchInfo-Select";
import BranchInfoSearch from "../../components/BranchInfo/-Search/BranchInfo-Search";
import BranchInfoInfo from "../../components/BranchInfo/-Info/BranchInfo-Info";
import TabsItemBase from "../../components/Tabs/-Item/Tabs-Item";
import Tabs from "../../components/Tabs/Tabs";
import Layout from "../../components/Layout/Layout";
import ThemeBase from "../../components/Theme/Theme";
import {ThemeColorProjectDefault} from "../../components/Theme/_color/Theme_color_project-default";
import {ThemeSpaceDefault} from "../../components/Theme/_space/Theme_space_default";
import {ThemeSizeDefault} from "../../components/Theme/_size/Theme_size_default";
import {ThemeGapSmall} from "../../components/Theme/_gap/Theme_gap_small";
import {TabsItemStateActive} from "../../components/Tabs/-Item/_state/Tabs-Item_state_active";
import Header from "../../components/Header/Header";
import {BreadCrumbsBorderB} from "../../components/BreadCrumbs/_border-b/BreadCrumbs_border-b";
import {LayoutContainerGrow} from "../../components/Layout/-Container/_grow/Layout-Container_grow";
import Link from "../../components/Link/Link";
import User from "../../components/User/User";
import Footer from "../../components/Footer/Footer";

const Theme = compose(
  ThemeSpaceDefault,
  ThemeSizeDefault,
  ThemeColorProjectDefault,
  ThemeGapSmall
)(ThemeBase);

const LayoutContainer = compose(
  LayoutContainerGrow
)(LayoutContainerBase)

const TabsItem = compose(
  TabsItemStateActive
)(TabsItemBase)

const BreadCrumbs = compose(
  BreadCrumbsBorderB
)(BreadCrumbsBase)

const PageFileListContent = () => (
  <Theme space='default' size='default' color='project-default' gap='small' font='default'>
    <Layout>
      <Header/>
      <LayoutContainer grow>
        <BreadCrumbs borderB>
          <BreadCrumbsItem>
            arcadia
          </BreadCrumbsItem>
        </BreadCrumbs>
        <BranchInfo border='bottom'>
          <BranchInfoHeader>
            <BranchInfoName>
              arcadia
            </BranchInfoName>
            <BranchInfoSelect mix={{'block': 'select', 'mods': {'size': 'big'}}}>
<span color='secondary'>
trunk
</span>
              <i position='baseline' mix={{'block': 'arrow', 'mods': {'state': 'down', 'color': 'secondary'}}}/>
            </BranchInfoSelect>
            <BranchInfoSearch>
            </BranchInfoSearch>
          </BranchInfoHeader>
          <BranchInfoInfo>
            {' Last commit '}
            <Link>c4d248</Link>
            {' on '}
            <Link>20 Oct 2017, 12:24</Link>
            {' by '}
            <User>robot-srch-releaser</User>
          </BranchInfoInfo>
          <Tabs>
            <TabsItem state='active'>
              files
            </TabsItem>
            <TabsItem>
              branches
            </TabsItem>
          </Tabs>
        </BranchInfo>
        <table hide='touch'>
          <thead>
          <tr/>
          </thead>
          <tbody mix={{'block': 'desktop-files'}}/>
        </table>
      </LayoutContainer>
      <Footer/>
    </Layout>
  </Theme>
);

export default PageFileListContent;
