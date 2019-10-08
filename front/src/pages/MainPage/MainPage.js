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
import {usePathname} from "../../utils/helpers";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState({});
  const pathname = usePathname();
  const repositoryName = pathname.split('/').filter(x => x && x !== "")[0] || '';

  useEffect(() => {
    setIsLoaded(false);
    setData({});
  }, [pathname])

  getData(pathname).then(
    json => {
      setData(json);
      setIsLoaded(true);
    }
  )

  const isFiles = Array.isArray(data);
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
        <BreadCrumbs repositoryNaeme={repositoryName}/>
        <BranchInfo repositoryName={repositoryName} isFiles={isFiles}/>
        {
          isLoaded
            ? isFiles
              ? <Files data={data}/>
              : <Details data={data}/>
            : <div>Loading...</div>
        }
      </LayoutContainer>
      <Footer/>
    </Layout>
  </Theme>
}

export default MainPage;
