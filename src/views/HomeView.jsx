import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { WelcomeComponent } from '../components/home/WelcomeComponent';
import { LanguageContext } from '../contexts/LanguageContext';
import useStyles from '../styles/global/homeStyle';
import { IndicatorComponents } from '../components/home/IndicatorComponents';
import { OdsComponent } from '../components/home/OdsComponent';
import { NewsResumenComponents } from '../components/home/NewsResumenComponents';
import { PartnersComponent } from '../components/home/PartnersComponent';
import { FooterComponent } from '../components/globals/FooterComponent';
import { NavbarComponent } from '../components/globals/NavbarComponent';
import { CarouselComponent } from '../components/globals/CarouselComponent';

export const HomeView = () => {

  const classesStyle = useStyles();
  const { dictionary } = useContext(LanguageContext);
  const { homeView, footerView } = dictionary;

  const carouselContent = [
    {
      background: 'https://picsum.photos/id/1/500/300',
      description: 'REPLICAMOS EL PROCESO DE FOTOSÍNTESIS PARA ENTREGARTE AIRE PURO EN CUALQUIER LUGAR '
    },
    {
      background: 'https://picsum.photos/id/2/500/300',
      description: 'REPLICAMOS EL PROCESO DE FOTOSÍNTESIS PARA ENTREGARTE AIRE PURO EN CUALQUIER LUGAR '
    },
    {
      background: 'https://picsum.photos/id/3/500/300',
      description: 'REPLICAMOS EL PROCESO DE FOTOSÍNTESIS PARA ENTREGARTE AIRE PURO EN CUALQUIER LUGAR '
    }
  ]

  return (
    <Grid container direction="column" justify="center" alignItems="stretch">
      <Grid item>
        <CarouselComponent carouselContent={carouselContent} />
      </Grid>
      <Grid item>
        <NavbarComponent />
      </Grid>
      <Grid item className={classesStyle.welcomeComponent}>
        <WelcomeComponent welcomeText={homeView.welcomeComponent} />
      </Grid>
      <Grid item className={classesStyle.indicatorComponet}>
        <IndicatorComponents indicatorText={homeView.indicatorComponent} />
      </Grid>
      <Grid item className={classesStyle.odsComponent}>
        <OdsComponent odsText={homeView.odsComponent} />
      </Grid>
      <Grid item className={classesStyle.newsResumenComponent}>
        <NewsResumenComponents newsText={homeView.newsResumenComponent} />
      </Grid>
      <Grid item className={classesStyle.newsResumenComponent}>
        <PartnersComponent partnersContent={homeView.partnersComponent} />
      </Grid>
      <Grid item className={classesStyle.newsResumenComponent}>
        <FooterComponent footerView={footerView} />
      </Grid>
    </Grid>

  )
}
