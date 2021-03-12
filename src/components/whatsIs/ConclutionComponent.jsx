import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import colors from '../../styles/global/colors';
import globalStyle from '../../styles/global/globalStyle';


export const ConclutionComponent = ({ conclutionContent }) => {

  const globalStyles = globalStyle();

  return (
    <>
      <Hidden smDown>
        <Grid container direction="row" justify="center" alignItems="center" className={globalStyles.fontLato} style={{marginTop:'30px', marginBottom: '50px'}} >
          <Grid item xs={8} md={6} style={{ fontSize: '24px', fontStyle: 'italic', textAlign: 'center' }}>
            {conclutionContent.description}
          </Grid>
          <Grid item xs={8} md={10} style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', color: colors.green_1 }}>
            {conclutionContent.title}
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center" className={globalStyles.fontLato} style={{marginBottom: '50px'}} >
          <Grid item xs={8} md={3} style={{ fontSize: '28px', color: colors.blue_1 }}>
            {conclutionContent.certification.text}
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={3} md={2}>
            <img src={conclutionContent.certification.icon1} alt="Photio-Certification-UCH" style={{maxWidth: '80%', textAlign: 'center'}} />
          </Grid>
          <Grid item xs={3} md={2}>
            <img src={conclutionContent.certification.icon2} alt="Photio-Certification-UC" style={{maxWidth: '80%', textAlign: 'center'}} />
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
        </Grid>
        <Grid container direction="row" justify="space-evenly" alignItems="center" style={{ fontFamily: 'Lato, sans-serif', paddingBottom: '20px' }} >
          <Grid item xs={10} md={3} style={{ fontSize: '18px', textAlign: 'center', color: colors.blue_1 }}>
            {conclutionContent.certification.text}
          </Grid>
          <Grid item xs={3} md={2}>
            <img src={conclutionContent.certification.icon1} alt="Photio-Certification-UCH" style={{ maxWidth: '100%', height: '80px', textAlign: 'center' }} />
          </Grid>
          <Grid item xs={3} md={2}>
            <img src={conclutionContent.certification.icon2} alt="Photio-Certification-UC" style={{ maxWidth: '100%', height: '80px', textAlign: 'center' }} />
          </Grid>
        </Grid>
      </Hidden>
    </>
  )
}
