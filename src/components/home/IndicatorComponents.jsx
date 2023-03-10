import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import globalStyle from '../../styles/global/globalStyle';
import { default as paintRoll } from './paintRoll.svg';
import { default as map } from './map.svg'

export const IndicatorComponents = ({ indicatorText }) => {

  const globalStyles = globalStyle();

  return (
    <>
    <Hidden smDown>
      <Grid container direction="row" justify="space-evenly" alignItems="flex-start" style={{paddingTop: '30px'}}  >
        <Grid item xs={1} />
        <Grid item xs={4} md={2} className={globalStyles.fontLato} >
          <img src={paintRoll} alt="paintRoll" style={{maxHeight: '50px'}} />
          <p className={globalStyles.paragraphTitle} style={{ margin: '0px' }}>{indicatorText.meters.count}</p>
          <p style={{ fontSize: '24px', margin: '0px' }}>{indicatorText.meters.description}</p>
        </Grid>
        <Grid item xs={4} md={2} className={globalStyles.fontLato} >
          <img src={map} alt="map" style={{maxHeight: '50px'}} />
          <p className={globalStyles.paragraphTitle} style={{ margin: '0px' }}>{indicatorText.cities.count}</p>
          <p style={{ fontSize: '24px', margin: '0px' }}>{indicatorText.cities.description}</p>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Hidden>
    <Hidden mdUp>
      <Grid container direction="row" justify="center" alignItems="center"  >
        <Grid item xs={5} md={2} className={globalStyles.fontLato} >
          <img src={paintRoll} alt="paintRoll" style={{maxHeight: '50px'}} />
          <p style={{ fontSize: '24px', margin: '0px', fontWeight: 'bold' }}>{indicatorText.meters.count}</p>
          <p style={{ fontSize: '14px', margin: '0px' }}>{indicatorText.meters.description}</p>
        </Grid>
        <Grid item xs={5} md={2} className={globalStyles.fontLato} >
          <img src={map} alt="map" style={{maxHeight: '50px'}} />
          <p style={{ fontSize: '24px', margin: '0px', fontWeight: 'bold' }}>{indicatorText.cities.count}</p>
          <p style={{ fontSize: '14px', margin: '0px' }}>{indicatorText.cities.description}</p>
        </Grid>
      </Grid>
    </Hidden>
    </>

  )
}
