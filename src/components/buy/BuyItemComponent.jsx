import React from 'react';
import { Grid, Hidden, withStyles, Button } from '@material-ui/core';
import colors from '../../styles/global/colors';
import globalStyle from '../../styles/global/globalStyle';
// import { ColorButton } from '../../styles/customStyles/ColorButton';
import { default as buyIcon } from './buyIcon.png';
import { default as serviceIcon } from './serviceIcon.png';
import { NavLink } from 'react-router-dom';

const icons = [serviceIcon, buyIcon];

const ColorButtonDesktop = withStyles((theme) => ({
  root: {
    color: colors.gray_6,
    fontSize: '18px',
    padding: '3px 15px 3px 15px',
    backgroundColor: colors.green_2,
    fontFamily: 'Poppins, sans-serif',
    '&:hover': {
      backgroundColor: colors.green_1,
    },
  },
}))(Button);

const ColorButtonMobile = withStyles((theme) => ({
  root: {
    color: colors.gray_6,
    fontSize: '14px',
    padding: '3px 15px 3px 15px',
    backgroundColor: colors.green_2,
    fontFamily: 'Poppins, sans-serif',
    '&:hover': {
      backgroundColor: colors.green_1,
    },
  },
}))(Button);

export const BuyItemComponent = ({ buyContent }) => {

  const globalStyles = globalStyle();

  return (
    <>
      <Hidden smDown>
        <Grid container direction="row" justify="space-evenly" alignItems="center" style={{ paddingTop: '10%', paddingBottom: '10%' }}>
          {
            buyContent.map((item, index) => {
              return (
                <Grid item xs={3} key={`Photio-buyItem-${index}`} style={{ textAlign: 'center', color: colors.blue_1 }} className={globalStyles.fontLato}>
                  <img src={icons[index]} alt={`Photio-service-${index}`} />
                  <h1 style={{ fontSize: '24px' }}>{item.title}</h1>
                  <p style={{ fontSize: '18px' }}>{item.description}</p>
                  <NavLink
                    key={`navbarItem-${index}`}
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to={item.to}
                    style={{textDecoration: 'none'}}
                  >
                    <ColorButtonDesktop>
                      {item.actionTitle}
                    </ColorButtonDesktop>
                  </NavLink>
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
                <Grid key={`Photio-buyItem-${index}`} container direction="row" justify="center" alignItems="center" >
                  <Grid item xs={3}>
                    <img src={icons[index]} alt={`Photio-service-${index}`} style={{ textAlign: 'center' }} />
                  </Grid>
                  <Grid item xs={6} style={{ color: colors.blue_1 }} className={globalStyles.fontLato}>
                    <h1 style={{ fontSize: '18px' }}>{item.title}</h1>
                    <p style={{ fontSize: '12px' }}>{item.description}</p>
                    <NavLink
                      key={`navbarItem-${index}`}
                      activeClassName="active"
                      className="nav-item nav-link"
                      exact
                      to={item.to}
                      style={{textDecoration: 'none'}}
                    >
                      <ColorButtonDesktop>
                        {item.actionTitle}
                      </ColorButtonDesktop>
                    </NavLink>
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
