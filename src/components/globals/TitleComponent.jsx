import React from 'react';
import { Grid, Hidden, withStyles, Button } from '@material-ui/core';
import globalStyle from '../../styles/global/globalStyle';
import colors from '../../styles/global/colors';
import { NavLink } from 'react-router-dom';


const ColorButton = withStyles((theme) => ({
  root: {
    color: colors.gray_6,
    padding: '0px 15px 0px 15px',
    margin: '10px',
    backgroundColor: colors.green_2,
    fontFamily: 'Poppins, sans-serif',
    '&:hover': {
      backgroundColor: colors.green_1,
    },
  }
}))(Button);


export const TitleComponent = ({ titleContent, titleImage, showAction = false }) => {

  const globalStyles = globalStyle();

  return (
    <>
      <Hidden smDown>
        <Grid container direction="row" justify="center" alignItems="center" spacing={4} style={{paddingTop: '15px', paddingBottom: '15px'}}>
          <Grid item md={3}>
            <p className={`${globalStyles.paragraphTitle} ${globalStyles.fontLato}`} style={{ color: colors.blue_1, fontWeight: 'bold', margin: '0px' }}>{titleContent.titleAction}</p>
          </Grid>
          <Grid item md={4}>
            <p className={`${globalStyles.paragraph} ${globalStyles.fontPoppins}`}>{titleContent.descriptionAction}</p>
          </Grid>
          <Grid item md={3} style={{ textAlign: 'center' }}>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/contact"
              style={{ textDecoration: 'none' }}
            >
              <ColorButton variant="contained">
                <p>{titleContent.textButtonAction}</p>
              </ColorButton>
            </NavLink>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid container direction="row" justify="center" alignItems="center" className={`${globalStyles.fontPoppins} ${globalStyles.primaryComponent}`} >
          <Grid item xs={7} >
            <p style={{ color: colors.blue_1, fontWeight: 'bold', fontSize: '18px', marginBottom: '0px' }}>{titleContent.titleAction}</p>
            <p style={{ fontSize: '14px', marginTop: '0px', color: 'white' }}>{titleContent.descriptionAction}</p>
          </Grid>
          <Grid item xs={4}>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/contact"
              style={{ textDecoration: 'none' }}
            >
              <ColorButton variant="contained">
                <p style={{ fontSize: '14px', margin: '0px', padding: '2px' }}>
                  {titleContent.textButtonAction}
                </p>
              </ColorButton>
            </NavLink>
          </Grid>
        </Grid>
      </Hidden>
    </>
  )
}
