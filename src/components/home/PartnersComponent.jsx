import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import colors from '../../styles/global/colors';


export const PartnersComponent = ({ partnersContent }) => {

  const { clients, partners } = partnersContent;

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="flex-start" >
        <Grid item xs={0} md={1} style={{ borderBottom: `solid 3px ${colors.green_2}`, marginTop: '87px' }} />
        <Hidden smDown>
          <Grid item xs={6} md={3} style={{ borderBottom: `solid 3px ${colors.green_2}` }}>
            <p style={{ fontSize: '36px', marginBottom: '0px' }}>{clients.title}</p>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item xs={6} md={3} style={{ borderBottom: `solid 3px ${colors.green_2}` }}>
            <p style={{ fontSize: '24px', marginBottom: '0px' }}>{clients.title}</p>
          </Grid>
        </Hidden>
        <Grid item xs={5} md={8} />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" style={{ marginTop: '50px', marginBottom: '50px' }} >
        {
          clients.images.map((image, index) => {
            return (
              <Grid key={`Photio-Client-${index}`} item xs={8} md={5} style={{ textAlign: 'center', maxWidth: '90%' }} >
                <img src={image} alt={'imageClient'} />
              </Grid>
            )
          })
        }
      </Grid>
      <Grid container direction="row" justify="center" alignItems="flex-start" >
        <Grid item xs={0} md={1} style={{ borderBottom: `solid 3px ${colors.green_2}`, marginTop: '87px' }} />
        <Hidden smDown>
          <Grid item xs={6} md={3} style={{ borderBottom: `solid 3px ${colors.green_2}` }}>
            <p style={{ fontSize: '36px', marginBottom: '0px' }}>{partners.title}</p>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item xs={10} md={3} style={{ borderBottom: `solid 3px ${colors.green_2}` }}>
            <p style={{ fontSize: '24px', marginBottom: '0px' }}>{partners.title}</p>
          </Grid>
        </Hidden>
        <Grid item xs={1} md={8} />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" style={{ marginTop: '50px', marginBottom: '50px' }} >
        {
          partners.images.map((image, index) => {
            return (
              <Grid key={`Photio-Partner-${index}`} item xs={5} md={3} style={{ textAlign: 'center', maxWidth: '90%' }} >
                <img src={image} alt={'imagePartner'} />
              </Grid>
            )
          })
        }
      </Grid>
    </>
  )
}
