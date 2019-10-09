import React, {useState, useEffect, memo} from "react";
import {compose} from '@bem-react/core';
import LayoutContainerBase from "../../patterns/Layout/-Container/Layout-Container";
import Layout from "../../patterns/Layout/Layout";
import ThemeBase from "../../Theme/Theme";
import {ThemeColorProjectDefault} from "../../Theme/_color/Theme_color_project-default";
import {ThemeSpaceDefault} from "../../Theme/_space/Theme_space_default";
import {ThemeSizeDefault} from "../../Theme/_size/Theme_size_default";
import {ThemeGapSmall} from "../../Theme/_gap/Theme_gap_small";
import Header from "../../components/Header/Header";
import {LayoutContainerGrow} from "../../patterns/Layout/-Container/_grow/Layout-Container_grow";
import Footer from "../../patterns/Footer/Footer";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import BranchInfo from "../../components/BranchInfo/BranchInfo";
import Files from "../../components/Files/Files";
import Details from "../../components/Details/Details";
import {urlToArray, usePathname} from "../../utils/helpers";
import RepositoriesTable from "../../components/RepositoriesTable/RepositoriesTable";
import {Page} from "../../utils/types";
import Loader from "../../components/Loader/Loader";

const Theme = compose(
  ThemeSpaceDefault,
  ThemeSizeDefault,
  ThemeColorProjectDefault,
  ThemeGapSmall
)(ThemeBase);

const LayoutContainer = compose(
  LayoutContainerGrow
)(LayoutContainerBase)

const MainPage = ({getData}) => {
  const [page, setPage] = useState(Page.loader);
  const [data, setData] = useState({});
  const pathname = usePathname();
  const urlArr = urlToArray(pathname);
  const repositoryName = urlArr[0] || '';

  useEffect(() => {
    setPage(Page.loader);
    setData({});
    getData(pathname).then(
      json => {
        setData(json);
        setPage(
          pathname === '/' ? Page.repositories :
            Array.isArray(json) ? Page.files : Page.details
        )
      }
    )
  }, [pathname])

  return <Theme
    space='default'
    size='default'
    color='project-default'
    gap='small'
    font='default'
  >
    <Layout>
      <Header repositoryName={repositoryName}/>
      <LayoutContainer grow>
        {page !== Page.repositories && <BreadCrumbs repositoryNaeme={repositoryName}/>}
        <BranchInfo repositoryName={repositoryName} page={page}/>
        {
          page === Page.loader ? <Loader/> :
          page === Page.files ? <Files data={data}/> :
          page === Page.details ? <Details data={data}/> :
          page === Page.repositories ? <RepositoriesTable data={data}/> :
          ''
        }
      </LayoutContainer>
      <Footer/>
    </Layout>
  </Theme>
}

export default memo(MainPage);
