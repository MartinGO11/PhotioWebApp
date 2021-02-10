import { Grid, Hidden } from '@material-ui/core'
import React from 'react';
import colors from '../../styles/global/colors';
import newnessImage from './newnessImage.png';

export const NewnessComponent = ({ newnessText }) => {
  return (
    <>
      <Hidden smDown>
        <Grid container direction="row" justify="center" alignItems="center" >
          <Grid item xs={1} />
          <Grid item xs={10} md={3}>
            <p style={{ color: colors.blue_1, fontSize: '48px', fontWeight: 'bold', marginBottom: '0px' }}>NOVEDADES</p>
            <div style={{ fontSize: '18px', textTransform: 'uppercase' }}>
              {newnessText.description}
            </div>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={12} md={6}>
            <img src={newnessImage} alt="prueba" style={{ maxWidth: '100%' }} />
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid container direction="row" justify="flex-start" alignItems="center" >
          <Grid item xs={1} />
          <Grid item xs={10}>
            <p style={{ color: colors.blue_1, fontSize: '36px', fontWeight: 'bold', marginBottom: '0px' }}>NOVEDADES</p>
            <div style={{ fontSize: '14px', textTransform: 'uppercase' }}>
              {newnessText.description}
            </div>
          </Grid>
          <Grid item xs={12} >
            <img src={newnessImage} alt="prueba" style={{ maxWidth: '100%' }} />
          </Grid>
        </Grid>
      </Hidden>
    </>
  )
}
