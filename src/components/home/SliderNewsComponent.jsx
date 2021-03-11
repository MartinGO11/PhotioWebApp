import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import colors from '../../styles/global/colors'

export const SliderNewsComponent = ({ sliderNewsContent }) => {

  const styles = {
    paperContainer: {
      background: `linear-gradient(0deg, rgba(24,70,102,0.4), rgba(24,70,102,0.4)), url(${sliderNewsContent.background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      minHeight: '450px',
      maxWidth: '100%',
      marginLeft: '-10%',
      marginBottom: '50px',
      paddingTop: '40px',
      color: colors.white
    }
  };

  const dateArray = sliderNewsContent.date.split('-');

  return (
    <a href={sliderNewsContent.url} target='_blank' rel='noreferrer' style={{textDecoration: 'none'}}>
    <Paper elevation={0} style={styles.paperContainer}>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
        <Grid item xs={1} />
        <Grid item xs={2} style={{textAlign: 'left'}} >
          <p style={{ fontSize: '18px', margin: '0px', fontWeight: 'bold' }} > {dateArray[0]} </p>
          <p style={{ fontSize: '18px', margin: '0px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '3px solid #FFFFFF' }}> {dateArray[1]} </p>
          <p style={{ fontSize: '18px', margin: '0px'}} > {dateArray[2]} </p>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="flex-start" >
        <Grid item xs={10} style={{ marginTop: '90px'}}>
          <p style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '0px', textAlign: 'left' }}>{sliderNewsContent.title} </p>
          <p style={{ fontSize: '12px', textAlign: 'right', marginTop: '0px' }}> {sliderNewsContent.origin} </p>
          <p style={{ fontSize: '14px', background: 'rgb(24,70,102)', padding: '10px 25px 10px 25px', textAlign: 'left' }} >{sliderNewsContent.description}</p>
        </Grid>
      </Grid>
    </Paper>
    </a>
  )
}
