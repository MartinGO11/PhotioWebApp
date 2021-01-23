import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from '../../styles/global/homeStyle';
import { default as paintRoll } from './paintRoll.svg';
import { default as map } from './map.svg'

export const IndicatorComponents = ({ indicatorText }) => {

  const classesStyle = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center" spacing={1} style={{textAlign: 'center', paddingTop: '25px', paddingBottom: '25px'}}>
      <Grid item xs={2} md={4} >
        {/* Espacio libre */}
      </Grid>
      <Grid item xs={4} md={2} className={classesStyle.fontLato} >
        <img src={paintRoll} alt="paintRoll" />
        <p className={classesStyle.paragraphTitle}>{indicatorText.meters.count}</p>
        <p className={classesStyle.paragraph}>{indicatorText.meters.description}</p>
      </Grid>
      <Grid item xs={4} md={2} className={classesStyle.fontLato} >
        <img src={map} alt="map" />
        <p className={classesStyle.paragraphTitle}>{indicatorText.cities.count}</p>
        <p className={classesStyle.paragraph}>{indicatorText.cities.description}</p>
      </Grid>
      <Grid item xs={2} md={4} >
        {/* Espacio libre */}
      </Grid>
    </Grid>
  )
}
