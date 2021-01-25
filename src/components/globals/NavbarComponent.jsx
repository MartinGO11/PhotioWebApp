import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { default as navbarItems } from '../../constants/navbarItems.json';
import colors from '../../styles/global/colors';

export const NavbarComponent = () => {
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center" style={{ background: colors.gray_2 }}>
        <Hidden mdDown>
          <Grid item md={8}>
            <p style={{textAlign: 'center', color: 'white'}}>
              {
                navbarItems.map(item => {
                  return (
                    <a
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      marginLeft: '20px',
                      marginRight: '20px'
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
