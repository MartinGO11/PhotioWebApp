import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { LanguageContext } from "../contexts/LanguageContext";
import globalStyle from "../styles/global/globalStyle";
import { default as titleIcon } from "../components/about/titleIcon.svg";
import { FooterComponent } from "../components/globals/FooterComponent";
import { NavbarComponent } from "../components/globals/NavbarComponent";
import { CarouselComponent } from "../components/globals/CarouselComponent";
import { TitleComponent } from "../components/globals/TitleComponent";
import { AboutComponents } from "../components/about/AboutComponents";
import { RoadComponent } from "../components/about/RoadComponent";
import { RecognitionComponent } from "../components/about/RecognitionComponent";

export const AboutView = () => {
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
      <Grid item>
        <AboutComponents aboutContent={aboutView.aboutItems} />
      </Grid>
      <Grid item>
        <RoadComponent imageRoad={aboutView.road.image} />
      </Grid>
      <Grid item>
        <RecognitionComponent recognitionContent={aboutView.recognitions} />
      </Grid>
      <Grid item className={globalStyles.secondaryComponent}>
        <TitleComponent
          titleContent={aboutView.welcomeComponent}
          titleImage={titleIcon}
          showAction
        />
      </Grid>
      <Grid item className={globalStyles.footerComponent}>
        <FooterComponent footerView={footerView} />
      </Grid>
    </Grid>
  );
};
