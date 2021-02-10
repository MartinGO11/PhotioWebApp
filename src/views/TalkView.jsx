import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { LanguageContext } from '../contexts/LanguageContext';
// import homeStyle from '../styles/global/homeStyle';
import globalStyle from '../styles/global/globalStyle';
import { FooterComponent } from '../components/globals/FooterComponent';
import { NavbarComponent } from '../components/globals/NavbarComponent';
import { FormContactComponent } from '../components/contact/FormContactComponent';
import { default as talkIcon } from '../components/contact/talk.svg'

export const TalkView = ({ contactContent }) => {
  // const homeStyles = homeStyle();
  const globalStyles = globalStyle();

  const { dictionary } = useContext(LanguageContext);
  const { contactView, footerView } = dictionary;


  return (
    <Grid container direction="column" justify="center" alignItems="stretch">
      <Grid item className={globalStyles.navbarComponent}>
        <NavbarComponent />
      </Grid>
      <Grid item className={globalStyles.principalComponent}>
        <FormContactComponent titleImage={talkIcon} />
      </Grid>
      <Grid item className={globalStyles.footerComponent}>
        <FooterComponent footerView={footerView} />
      </Grid>
    </Grid>
  )
}
