import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import logoPhotio from './logoPhotioCarousel.svg';
import MenuIcon from '@material-ui/icons/Menu';
import { default as navbarItems } from '../../constants/navbarItems.json';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export const CarouselComponent = ({ carouselContent }) => {

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navbarItems.map((item, index) => (
          <ListItem button key={item.title}>
            <a href={item.to} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary={item.title} />
            </a>
            <Divider />
          </ListItem>
        ))}
      </List>
    </div>
  );



  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12}>
        <div style={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          // backgroundImage: `url(${sliderContent.background})`,
          background: 'black',
          height: '93vh',
        }}>
          <Hidden smDown>
            <a href='/'>
              <img
                src={logoPhotio}
                alt="Photio-Logo"
                style={{
                  position: 'absolute',
                  top: '5%',
                  left: '5%',
                  marginRight: '10vw',
                  textAlign: 'left',
                  maxWidth: '8%'
                }}
              />
            </a>
            <p style={{
              color: 'white',
              fontSize: '18px',
              padding: '40px 30px 40px 30px',
              background: 'rgba(24,70,102,0.8)',
              position: 'absolute',
              top: '65%',
              left: '60%',
              paddingRight: '10vw',
              textAlign: 'left'
            }}>
              {carouselContent[0].description}
            </p>
          </Hidden>
          <Hidden mdUp>
            <a href="/">
              <img
                src={logoPhotio}
                alt="Photio-Logo"
                style={{
                  position: 'absolute',
                  top: '5%',
                  left: '10%',
                  marginRight: '10vw',
                  textAlign: 'left',
                  maxWidth: '20%'
                }}
              />
            </a>
            <>
              <MenuIcon style={{
                fontSize: '30px',
                color: 'white',
                position: 'absolute',
                top: '5%',
                left: '85%'
              }}
                onClick={toggleDrawer('right', true)}
              />
              <SwipeableDrawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
              >
                {list('right')}
              </SwipeableDrawer>
            </>

            <p style={{
              color: 'white',
              fontSize: '14px',
              padding: '20px 30px 20px 30px',
              background: 'rgba(24,70,102,0.8)',
              position: 'absolute',
              top: '65%',
              left: '30%',
              // marginRight: '10vw',
              textAlign: 'left'
            }}>
              {carouselContent[0].description}
            </p>
          </Hidden>

        </div>
      </Grid>
    </Grid>
  )
}
