import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { LanguageContext } from "../contexts/LanguageContext";
import globalStyle from "../styles/global/globalStyle";
import { default as titleIcon } from "../components/whatsIs/titleIcon.svg";
import { FooterComponent } from "../components/globals/FooterComponent";
import { NavbarComponent } from "../components/globals/NavbarComponent";
import { CarouselComponent } from "../components/globals/CarouselComponent";
import { TitleComponent } from "../components/globals/TitleComponent";
import { WhatsIsComponent } from "../components/whatsIs/WhatsIsComponent";
import { ConclutionComponent } from "../components/whatsIs/ConclutionComponent";

export const WhatsIsView = () => {
  const globalStyles = globalStyle();

  const { dictionary } = useContext(LanguageContext);
  const { whatIsView, footerView } = dictionary;

  return (
    <Grid container direction="column" justify="center" alignItems="stretch">
      <Grid item>
        <CarouselComponent carouselContent={whatIsView.carouselContent} />
      </Grid>
      <Grid item className={globalStyles.navbarComponent}>
        <NavbarComponent />
      </Grid>
      <Grid item>
        <WhatsIsComponent whatIsContent={whatIsView.items} />
      </Grid>
      <Grid item>
        <ConclutionComponent conclutionContent={whatIsView.general} />
      </Grid>
      <Grid item className={globalStyles.secondaryComponent}  style={{marginTop: '100px'}}>
        <TitleComponent titleContent={whatIsView.welcomeComponent} titleImage={titleIcon} showAction />
      </Grid>
      <Grid item className={globalStyles.footerComponent}>
        <FooterComponent footerView={footerView} />
      </Grid>
    </Grid>
  );
};
