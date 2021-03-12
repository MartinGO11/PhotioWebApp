import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { LanguageContext } from "../contexts/LanguageContext";
import globalStyle from "../styles/global/globalStyle";
import { default as titleIcon } from "../components/applications/titleIcon.svg";
import { FooterComponent } from "../components/globals/FooterComponent";
import { NavbarComponent } from "../components/globals/NavbarComponent";
import { CarouselComponent } from "../components/globals/CarouselComponent";
import { TitleComponent } from "../components/globals/TitleComponent";
import { ApplicationsComponent } from "../components/applications/ApplicationsComponent";

export const ApplicationsView = () => {
  const globalStyles = globalStyle();

  const { dictionary } = useContext(LanguageContext);
  const { applicationsView, footerView } = dictionary;

  return (
    <Grid container direction="column" justify="center" alignItems="stretch">
      <Grid item>
        <CarouselComponent carouselContent={applicationsView.carouselContent} />
      </Grid>
      <Grid item className={globalStyles.navbarComponent}>
        <NavbarComponent />
      </Grid>
      <Grid item>
        <ApplicationsComponent
          applicationsContent={applicationsView.applications}
        />
      </Grid>
      <Grid item className={globalStyles.secondaryComponent} style={{marginTop: '100px'}}>
        <TitleComponent titleContent={applicationsView.welcomeComponent} titleImage={titleIcon} showAction />
      </Grid>
      <Grid item className={globalStyles.footerComponent}>
        <FooterComponent footerView={footerView} />
      </Grid>
    </Grid>
  );
};
