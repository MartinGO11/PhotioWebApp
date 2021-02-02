import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import globalStyle from '../../styles/global/globalStyle';
import homeStyle from '../../styles/global/homeStyle';
import { default as odsBanner } from './odsBanner.svg';
import { default as ods } from './ods.svg'

export const OdsComponent = ({ odsText }) => {

  const homeStyles = homeStyle();
  const globalStyles = globalStyle();

  return (
    <>
      <Hidden smDown>
        <Grid container direction="row" justify="center" alignItems="center" spacing={1} className={homeStyles.odsComponent} >
          <Grid item md={1} >
            {/* vacio */}
          </Grid>
          <Grid item md={3}>
            <p className={globalStyles.paragraphImportant} style={{ marginLeft: '50px' }}>{odsText.description}</p>
            <img src={odsBanner} alt="odsBanner" style={{ marginLeft: '50px' }} />
          </Grid>
          <Grid item md={2} >
            {/* vacio */}
          </Grid>
          <Grid item md={6} className={globalStyles.center}>
            <img src={ods} alt="ods" />
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid container direction="row" justify="center" alignItems="center" spacing={1} className={globalStyles.principalComponent} >
          <Grid item xs={8} className={globalStyles.center}>
            <p className={globalStyles.paragraphImportant}>{odsText.description}</p>
          </Grid>
          <Grid item xs={8} className={globalStyles.center}>
            <img src={odsBanner} alt="odsBanner" />
          </Grid>
          <Grid item xs={8} className={globalStyles.center}>
            <img src={ods} alt="ods" />
          </Grid>
        </Grid>
      </Hidden>
    </>
  )
}
