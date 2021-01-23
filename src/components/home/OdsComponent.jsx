import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import useStyles from '../../styles/global/homeStyle';
import { default as odsBanner } from './odsBanner.svg';
import { default as ods } from './ods.svg'

export const OdsComponent = ({ odsText }) => {

  const classesStyle = useStyles();

  return (
    <>
      <Hidden smDown>
        <Grid container direction="row" justify="center" alignItems="center" spacing={1} className={classesStyle.odsComponent} style={{ paddingTop: '25px', paddingBottom: '25px' }} >
          <Grid item md={1} className={classesStyle.center}>
            {/* vacio */}
          </Grid>
          <Grid item md={3}>
            <p className={classesStyle.paragraphImportant} style={{ marginLeft: '50px' }}>{odsText.description}</p>
            <img src={odsBanner} alt="odsBanner" style={{ marginLeft: '50px' }} />
          </Grid>
          <Grid item md={2} className={classesStyle.center}>
            {/* vacio */}
          </Grid>
          <Grid item md={6} className={classesStyle.center}>
            <img src={ods} alt="ods" />
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid container direction="row" justify="center" alignItems="center" spacing={1} className={classesStyle.welcomeComponent} >
          <Grid item xs={8} className={classesStyle.center}>
            <p className={classesStyle.paragraphImportant}>{odsText.description}</p>
            <img src={odsBanner} alt="odsBanner" />
            <img src={ods} alt="ods" />
          </Grid>
        </Grid>

      </Hidden>
    </>
  )
}
