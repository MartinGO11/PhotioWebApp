import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { default as navbarItems } from '../../constants/navbarItems.json';

export const NavbarComponent = () => {

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Hidden mdDown>
          <Grid item md={10}>
            <p style={{textAlign: 'center', color: 'white', fontSize: '18px'}}>
              {
                navbarItems.map((item, index) => {
                  return (
                    <a
                    key={`navbarItem-${index}`}
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      marginLeft: '3vw',
                      marginRight: '3vw'
                    }} 
                    href={item.to}>
                      { item.title }
                    </a>
                  )
                })
              }
            </p>
          </Grid>
        </Hidden>
      </Grid>
    </>
  )
}
