import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { LanguageContext } from "../contexts/LanguageContext";
import globalStyle from "../styles/global/globalStyle";
import { FooterComponent } from "../components/globals/FooterComponent";
import { NavbarComponent } from "../components/globals/NavbarComponent";
import { FormContactComponent } from "../components/contact/FormContactComponent";
import { CarouselComponent } from '../components/globals/CarouselComponent';
import { BuyItemComponent } from '../components/buy/BuyItemComponent';

import { default as contactIcon } from "../components/contact/contact.svg";

export const ContactView = () => {
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
      <Grid item>
        <BuyItemComponent buyContent={buyView.buyItems} />
      </Grid>
      <Grid item className={globalStyles.principalComponent} style={{paddingBottom: '100px'}}>
        <FormContactComponent titleImage={contactIcon} />
      </Grid>
      <Grid item className={globalStyles.footerComponent} >
        <FooterComponent footerView={footerView} />
      </Grid>
    </Grid>
  );
};
