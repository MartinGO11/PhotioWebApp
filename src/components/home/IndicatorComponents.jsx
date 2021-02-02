import React from 'react';
import { Grid } from '@material-ui/core';
import globalStyle from '../../styles/global/globalStyle';
import { default as paintRoll } from './paintRoll.svg';
import { default as map } from './map.svg'

export const IndicatorComponents = ({ indicatorText }) => {

  const globalStyles = globalStyle();

  return (
    <Grid container direction="row" justify="center" alignItems="center" spacing={1}  >
      <Grid item xs={2} md={4} >
        {/* Espacio libre */}
      </Grid>
      <Grid item xs={4} md={2} className={globalStyles.fontLato} >
        <img src={paintRoll} alt="paintRoll" />
        <p className={globalStyles.paragraphTitle}>{indicatorText.meters.count}</p>
        <p className={globalStyles.paragraph}>{indicatorText.meters.description}</p>
      </Grid>
      <Grid item xs={4} md={2} className={globalStyles.fontLato} >
        <img src={map} alt="map" />
        <p className={globalStyles.paragraphTitle}>{indicatorText.cities.count}</p>
        <p className={globalStyles.paragraph}>{indicatorText.cities.description}</p>
      </Grid>
      <Grid item xs={2} md={4} >
        {/* Espacio libre */}
      </Grid>
    </Grid>
  )
}
