import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { default as navbarItems } from '../../constants/navbarItems.json';
import { NavLink } from 'react-router-dom';

export const NavbarComponent = () => {

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Hidden mdDown>
          <Grid item md={10}>
            <p style={{ textAlign: 'center', color: 'white', fontSize: '18px' }}>
              {
                navbarItems.map((item, index) => {
                  return (
                    <NavLink
                      key={`navbarItem-${index}`}
                      activeClassName="active"
                      className="nav-item nav-link"
                      exact
                      to={item.to}
                      style={{
                        color: 'inherit',
                        textDecoration: 'none',
                        marginLeft: '3vw',
                        marginRight: '3vw'
                      }}
                    >
                      { item.title}
                    </NavLink>
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
