import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { LanguageContext } from '../contexts/LanguageContext';
import homeStyle from '../styles/global/homeStyle';
import globalStyle from '../styles/global/globalStyle';
import { default as titleIcon } from '../components/applications/titleIcon.svg';
import { FooterComponent } from '../components/globals/FooterComponent';
import { NavbarComponent } from '../components/globals/NavbarComponent';
import { CarouselComponent } from '../components/globals/CarouselComponent';
import { TitleComponent } from '../components/globals/TitleComponent';
import { AboutComponents } from '../components/about/AboutComponents';


export const AboutView = () => {

  const homeStyles = homeStyle();
  const globalStyles = globalStyle();

  const { dictionary } = useContext(LanguageContext);
  const { aboutView, footerView } = dictionary;


  return (
    <Grid container direction="column" justify="center" alignItems="stretch">
      <Grid item>
        <CarouselComponent carouselContent={aboutView.carouselContent} />
      </Grid>
      <Grid item className={globalStyles.navbarComponent}>
        <NavbarComponent />
      </Grid>
      <Grid item className={globalStyles.principalComponent}>
        <TitleComponent titleContent={aboutView.welcomeComponent} titleImage={titleIcon} showAction />
      </Grid>
      <Grid item >
        <AboutComponents aboutContent={aboutView.aboutItems} />
      </Grid>
      <Grid item className={globalStyles.footerComponent}>
        <FooterComponent footerView={footerView} />
      </Grid>
    </Grid>
  )
}
