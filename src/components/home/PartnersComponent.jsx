import React from 'react';
import { Grid } from '@material-ui/core';
import colors from '../../styles/global/colors';
import { default as client1 } from './client1.svg';
import { default as partner1 } from './partner1.svg';


export const PartnersComponent = ({ partnersContent }) => {

  const { clients, partners } = partnersContent;

  return (
    <>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
        <Grid item xs={5} md={3} style={{ borderBottom: `solid 3px ${colors.green_2}` }}>
          <p style={{ fontSize: '36px', marginBottom: '0px', marginLeft: '30px' }}>{clients.title}</p>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: '50px', marginBottom: '50px'}} >
        {
          clients.images.map(image => {
            return (
              <Grid item xs={5} md={5} style={{ textAlign: 'center' }} >
                <img src={client1} alt={'image'} />
              </Grid>
            )
          })
        }
      </Grid>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
        <Grid item xs={5} md={3} style={{ borderBottom: `solid 3px ${colors.green_2}` }}>
          <p style={{ fontSize: '36px', marginBottom: '0px', marginLeft: '30px' }}>{partners.title}</p>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: '50px', marginBottom: '50px'}} >
        {
          partners.images.map(image => {
            return (
              <Grid item xs={3} md={3} style={{ textAlign: 'center' }} >
                <img src={partner1} alt={'image'} />
              </Grid>
            )
          })
        }
      </Grid>
    </>
  )
}
