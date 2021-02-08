import React from 'react';
import { Button, Grid, Hidden } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import colors from '../../styles/global/colors';
import globalStyle from '../../styles/global/globalStyle';
import { default as buyIcon } from './buyIcon.png';
import { default as serviceIcon } from './serviceIcon.png';


const ColorButton = withStyles((theme) => ({
  root: {
    color: colors.gray_6,
    backgroundColor: colors.green_2,
    fontFamily: 'Poppins, sans-serif',
    '&:hover': {
      backgroundColor: colors.green_1,
    },
  },
}))(Button);

const icons = [serviceIcon, buyIcon];

export const BuyItemComponent = ({ buyContent }) => {

  const globalStyles = globalStyle();

  return (
    <>
      <Hidden smDown>
        <Grid container direction="row" justify="space-evenly" alignItems="center" style={{ paddingTop: '10%', paddingBottom: '10%' }}>
          {
            buyContent.map((item, index) => {
              return (
                <Grid item xs={3} key={`buyItem-${index}`} style={{ textAlign: 'center', color: colors.blue_1 }} className={globalStyles.fontLato}>
                  <img src={icons[index]} alt={`Photio-service-${index}`} />
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <ColorButton>{item.actionTitle}</ColorButton>
                </Grid>
              )
            })
          }
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid container direction="column" justify="center" alignItems="center" style={{ paddingTop: '5%', paddingBottom: '5%' }}>
          {
            buyContent.map((item, index) => {
              return (
                <Grid container direction="row" justify="center" alignItems="center" >
                  <Grid item xs={3}>
                    <img src={icons[index]} alt={`Photio-service-${index}`} style={{textAlign: 'center'}} />
                  </Grid>
                  <Grid item xs={6} key={`buyItem-${index}`} style={{ color: colors.blue_1 }} className={globalStyles.fontLato}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <ColorButton>{item.actionTitle}</ColorButton>
                  </Grid>
                </Grid>
              )
            })
          }
        </Grid>
      </Hidden>
    </>

  )
}
