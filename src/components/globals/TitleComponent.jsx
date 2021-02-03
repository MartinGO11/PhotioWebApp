import React from 'react';
import { Grid, Hidden, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import globalStyle from '../../styles/global/globalStyle';
import colors from '../../styles/global/colors';
import { default as openKey } from '../home/openKey.svg';

const ColorButton = withStyles((theme) => ({
  root: {
    color: colors.gray_6,
    backgroundColor: colors.green_2,
    '&:hover': {
      backgroundColor: colors.green_1,
    },
  },
}))(Button);

export const TitleComponent = ({ titleContent, titleImage, showAction = false }) => {

  const globalStyles = globalStyle();

  return (
    <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} >
      <Grid item xs={4} md={3} style={{ textAlign: 'center' }} >
        <img src={titleImage} alt="titleImage" />
      </Grid>
      <Grid item xs={1} style={{ textAlign: 'right', paddingTop: '25px', paddingBottom: '25px' }}>
        <img src={openKey} alt="openKey" style={{ marginRight: '20px' }} />
      </Grid>
      <Grid item xs={6} md={ showAction ? 4 : 6 } className={globalStyles.fontLato} >
        {
          titleContent.description.map((description, index) => {
            return (
              <p key={`title-${index}`} style={{ marginRight: '20px' }}>{description}</p>
            )
          })
        }
      </Grid>
      {
        showAction &&
        <>
          <Hidden smDown>
            <Grid item md={4} className={globalStyles.fontPoppins} style={{ textAlign: 'center' }}>
              <p className={globalStyles.paragraphTitle} style={{ color: colors.blue_1, fontWeight: 'bold' }}>{titleContent.titleAction}</p>
              <p className={globalStyles.paragraph} style={{ marginLeft: '50px', marginRight: '50px' }}>{titleContent.descriptionAction}</p>
              <ColorButton variant="contained">{titleContent.textButtonAction}</ColorButton>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid container direction="row" justify="center" alignItems="center" spacing={1} className={`${globalStyles.fontPoppins} ${globalStyles.secondaryComponent}`} >
              <Grid item xs={7} >
                <p className={globalStyles.paragraphTitle} style={{ color: colors.blue_1, fontWeight: 'bold', marginLeft: '50px' }}>{titleContent.titleAction}</p>
                <p className={globalStyles.paragraph} style={{ marginLeft: '50px', marginRight: '50px' }}>{titleContent.descriptionAction}</p>
              </Grid>
              <Grid item xs={1}>
              </Grid>
              <Grid item xs={4}>
                <ColorButton variant="contained">{titleContent.textButtonAction}</ColorButton>
              </Grid>
            </Grid>
          </Hidden>
        </>
      }
    </Grid>
  )
}
