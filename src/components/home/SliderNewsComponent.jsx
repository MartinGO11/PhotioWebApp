import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import colors from '../../styles/global/colors'

export const SliderNewsComponent = ({ sliderNewsContent }) => {

  const styles = {
    paperContainer: {
      backgroundImage: `url(${Image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      minHeight: '300px',
      display: 'flex',
      alignItems: 'center',
      maxWidth: '100%',
      marginLeft: '-10%'
    }
  };

  const dateArray = sliderNewsContent.date.split('-');

  return (
    <Paper elevation={0} style={styles.paperContainer}>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
        <Grid item xs={1} />
        <Grid item xs={1} style={{ color: colors.white, borderBottom: '3px solid #FFFFFF' }}>
          <p style={{ fontSize: '18px', margin: '0px', fontWeight: 'bold' }} > {dateArray[0]} </p>
          <p style={{ fontSize: '18px', margin: '0px', fontWeight: 'bold', textTransform: 'uppercase' }}> {dateArray[1]} </p>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={8} style={{ color: colors.white, marginTop: '30px' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0px' }}>{sliderNewsContent.title} </p>
          <p style={{ fontSize: '14px', textAlign: 'right', marginTop: '0px' }}> {sliderNewsContent.origin} </p>
          <p style={{ fontSize: '14px', background: 'rgba(24,70,102,0.3)', padding: '5px' }} >{sliderNewsContent.description}</p>
        </Grid>
      </Grid>
    </Paper>
  )
}
