import { Paper, Grid } from '@material-ui/core';
import React from 'react';
import useStyles from '../../styles/global/homeStyle';
import colors from '../../styles/global/colors';
import Image from './test1.png';



export const NewsCardComponent = ({ newsContent }) => {
  
  const styles = {
    paperContainer: {
      backgroundImage: `url(${Image})`
    }
  };

  const classesStyle = useStyles();

  const dateArray = newsContent.date.split('-');

  return (
    <Paper elevation={0} style={styles.paperContainer} >
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
        <Grid item xs={2} style={{ color: colors.white, borderBottom: '3px solid #FFFFFF', marginRight: '50px' }}>
          <p className={classesStyle.paragraphImportant} style={{margin: '0px', fontWeight: 'bold'}} > {dateArray[0]} </p>
          <p className={classesStyle.paragraphImportant} style={{margin: '0px', fontWeight: 'bold'}}> {dateArray[1]} </p>
        </Grid>
        <Grid item xs={8} style={{ color: colors.white }}>
          <p className={classesStyle.paragraphImportant} style={{fontWeight: 'bold'}}>{newsContent.title} </p>
          <p style={{ fontSize: '11px', textAlign: 'right' }}> {newsContent.origin} </p>
          <p style={{ fontSize: '12px', background: 'rgba(24,70,102,0.3)', padding: '5px' }} >{newsContent.description}</p>
        </Grid>
      </Grid>
    </Paper>
  )
}
