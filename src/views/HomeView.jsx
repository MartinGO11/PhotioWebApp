import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { LanguageContext } from "../contexts/LanguageContext";
import homeStyle from "../styles/global/homeStyle";
import globalStyle from "../styles/global/globalStyle";
import { default as titleIcon } from "../components/home/titleIcon.svg";
import { IndicatorComponents } from "../components/home/IndicatorComponents";
import { OdsComponent } from "../components/home/OdsComponent";
import { NewsResumenComponents } from "../components/home/NewsResumenComponents";
import { PartnersComponent } from "../components/home/PartnersComponent";
import { FooterComponent } from "../components/globals/FooterComponent";
import { NavbarComponent } from "../components/globals/NavbarComponent";
import { CarouselComponent } from "../components/globals/CarouselComponent";
import { TitleComponent } from "../components/globals/TitleComponent";
import { NewnessComponent } from "../components/home/NewnessComponent";

export const HomeView = () => {
  const homeStyles = homeStyle();
  const globalStyles = globalStyle();
  const { dictionary } = useContext(LanguageContext);
  const { homeView, footerView } = dictionary;

  return (
    <Grid container direction="column" justify="center" alignItems="stretch">
      <Grid item>
        <CarouselComponent carouselContent={homeView.carouselContent} />
      </Grid>
      <Grid item className={globalStyles.navbarComponent}>
        <NavbarComponent />
      </Grid> 
      <Grid item className={homeStyles.indicatorComponent}>
        <IndicatorComponents indicatorText={homeView.indicatorComponent} />
      </Grid>
      <Grid item className={globalStyles.secondaryComponent}>
        <OdsComponent odsText={homeView.odsComponent} />
      </Grid>
      <Grid item className={homeStyles.newsResumenComponent}>
        <NewsResumenComponents newsText={homeView.newsResumenComponent} />
      </Grid>
      <Grid item className={homeStyles.newsResumenComponent}>
        <NewnessComponent newnessText={homeView.newnessComponent} />
      </Grid>
      <Grid item className={homeStyles.newsResumenComponent}>
        <PartnersComponent partnersContent={homeView.partnersComponent} />
      </Grid>
      <Grid item className={globalStyles.secondaryComponent} style={{marginTop: '100px'}}>
        <TitleComponent titleContent={homeView.welcomeComponent} titleImage={titleIcon} showAction />
      </Grid> 
      <Grid item className={globalStyles.footerComponent}>
        <FooterComponent footerView={footerView} />
      </Grid>
    </Grid>
  );
};
