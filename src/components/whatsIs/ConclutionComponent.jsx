import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import colors from '../../styles/global/colors';

export const ConclutionComponent = ({ conclutionContent }) => {
  return (
    <>
      <Hidden smDown>
        <Grid container direction="row" justify="center" alignItems="center" style={{ fontFamily: 'Lato, sans-serif' }} >
          <Grid item xs={8} md={6} style={{ fontSize: '24px', fontStyle: 'italic', textAlign: 'center' }}>
            {conclutionContent.description}
          </Grid>
          <Grid item xs={8} md={10} style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center', color: colors.green_1 }}>
            {conclutionContent.title}
          </Grid>
          <Grid item xs={8} md={3} style={{ fontSize: '36px' }}>
            {conclutionContent.certification.text}
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={3} md={2}>
            <img src={conclutionContent.certification.icon1} alt="Photio-Certification-UCH" />
          </Grid>
          <Grid item xs={3} md={2}>
            <img src={conclutionContent.certification.icon2} alt="Photio-Certification-UC" />
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid container direction="row" justify="center" alignItems="center" style={{ fontFamily: 'Lato, sans-serif' }} >
          <Grid item xs={8} md={6} style={{ fontSize: '14px', fontStyle: 'italic', textAlign: 'center' }}>
            {conclutionContent.description}
          </Grid>
          <Grid item xs={8} md={10} style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center', color: colors.green_1 }}>
            {conclutionContent.title}
          </Grid>
          <Grid item xs={10} md={3} style={{ fontSize: '18px', textAlign: 'center' }}>
            {conclutionContent.certification.text}
          </Grid>
          <Grid item xs={0} md={1} />
          <Grid item xs={4} md={2}>
            <img src={conclutionContent.certification.icon1} alt="Photio-Certification-UCH" style={{maxWidth: '100%'}} />
          </Grid>
          <Grid item xs={4} md={2}>
            <img src={conclutionContent.certification.icon2} alt="Photio-Certification-UC" style={{maxWidth: '100%'}} />
          </Grid>
        </Grid>
      </Hidden>
    </>
  )
}
