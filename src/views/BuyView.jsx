import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { LanguageContext } from '../contexts/LanguageContext';
// import homeStyle from '../styles/global/homeStyle';
import globalStyle from '../styles/global/globalStyle';
import { default as titleIcon } from '../components/buy/titleIcon.svg';
import { FooterComponent } from '../components/globals/FooterComponent';
import { NavbarComponent } from '../components/globals/NavbarComponent';
import { CarouselComponent } from '../components/globals/CarouselComponent';
import { TitleComponent } from '../components/globals/TitleComponent';
import { BuyItemComponent } from '../components/buy/BuyItemComponent';

export const BuyView = () => {
  // const homeStyles = homeStyle();
  const globalStyles = globalStyle();

  const { dictionary } = useContext(LanguageContext);
  const { buyView, footerView } = dictionary;


  return (
    <Grid container direction="column" justify="center" alignItems="stretch">
      <Grid item>
        <CarouselComponent carouselContent={buyView.carouselContent} />
      </Grid>
      <Grid item className={globalStyles.navbarComponent}>
        <NavbarComponent />
      </Grid>
      <Grid item className={globalStyles.principalComponent}>
        <TitleComponent titleContent={buyView.welcomeComponent} titleImage={titleIcon} showAction />
      </Grid>
      <Grid item >
        <BuyItemComponent buyContent={buyView.buyItems} />
      </Grid>
      <Grid item className={globalStyles.footerComponent}>
        <FooterComponent footerView={footerView} />
      </Grid>
    </Grid>
  )
}
