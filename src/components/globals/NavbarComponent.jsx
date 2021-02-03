import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import globalStyle from '../../styles/global/globalStyle';
import { default as navbarItems } from '../../constants/navbarItems.json';

export const NavbarComponent = () => {

  const globalStyles = globalStyle();

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Hidden mdDown>
          <Grid item md={8}>
            <p style={{textAlign: 'center', color: 'white'}}>
              {
                navbarItems.map((item, index) => {
                  return (
                    <a
                    key={`navbarItem-${index}`}
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
