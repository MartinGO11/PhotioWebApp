import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import globalStyle from '../../styles/global/globalStyle';
import homeStyle from '../../styles/global/homeStyle';
import { default as odsBannerDesktop } from './odsBannerDesktop.png';
import { default as odsDesktop } from './odsDesktop.svg';
import { default as odsBannerMobile } from './odsBannerMobile.png';

export const OdsComponent = ({ odsText }) => {

  const homeStyles = homeStyle();
  const globalStyles = globalStyle();

  return (
    <>
      <Hidden smDown>
        <Grid container direction="row" justify="center" alignItems="center" className={homeStyles.odsComponent} >
          <Grid item md={3}>
            <p className={globalStyles.paragraphImportant} style={{ marginLeft: '50px' }}>{odsText.description}</p>
            <img src={odsBannerDesktop} alt="odsBanner" style={{ marginLeft: '50px', maxWidth: '100%' }} />
          </Grid>
          <Grid item md={2} >
            {/* vacio */}
          </Grid>
          <Grid item md={6} className={globalStyles.center}>
            <img src={odsDesktop} alt="ods" style={{maxWidth: '100%' }} />
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid container direction="row" justify="center" alignItems="center" className={globalStyles.principalComponent} style={{paddingBottom: '15px'}} >
          <Grid item xs={10} className={globalStyles.center}>
            <p style={{fontSize: '16px', marginBottom: '0px'}}>{odsText.description}</p>
          </Grid>
          <Grid item xs={8} className={globalStyles.center}>
            <img src={odsBannerMobile} alt="odsBanner" />
          </Grid>
          <Grid item xs={8} className={globalStyles.center}>
          <img src={odsDesktop} alt="ods" style={{maxWidth: '100%' }} />
            {/* <img src={ods} alt="ods" /> */}
          </Grid>
        </Grid>
      </Hidden>
    </>
  )
}
