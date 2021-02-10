import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import globalStyle from '../../styles/global/globalStyle';
import colors from '../../styles/global/colors';
import { ColorButton } from '../../styles/customStyles/ColorButton';
import { default as openKey } from '../home/openKey.svg';

export const TitleComponent = ({ titleContent, titleImage, showAction = false }) => {

  const globalStyles = globalStyle();

  return (
    <>
      <Hidden smDown>
        <Grid container direction="row" justify="flex-start" alignItems="center" >
          <Grid item xs={1} />
          <Grid item xs={4} md={2} style={{ textAlign: 'left' }} >
            <img src={titleImage} alt="titleImage" style={{ maxWidth: '100%' }} />
          </Grid>
          <Grid item xs={1} style={{ textAlign: 'right', paddingTop: '25px', paddingBottom: '25px' }}>
            <img src={openKey} alt="openKey" style={{ marginRight: '20px', maxHeight: '100%' }} />
          </Grid>
          <Grid item xs={7} md={5} className={globalStyles.fontLato} >
            {
              titleContent.description.map((description, index) => {
                return (
                  <div key={`title-${index}`} style={{ marginRight: '20px', fontSize: '21px' }}>
                    {description}
                  </div>
                )
              })
            }
          </Grid>
          <Grid item md={3} className={globalStyles.fontPoppins} style={{ textAlign: 'center' }}>
            <p className={globalStyles.paragraphTitle} style={{ color: colors.blue_1, fontWeight: 'bold', marginBottom: '0px' }}>{titleContent.titleAction}</p>
            <p className={globalStyles.paragraph} style={{ marginLeft: '50px', marginRight: '50px', marginTop: '0px', marginBottom: '9px' }}>{titleContent.descriptionAction}</p>
            <ColorButton variant="contained" style={{ marginBottom: '30px' }}>{titleContent.textButtonAction}</ColorButton>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid container direction="row" justify="center" alignItems="center" >
          <Grid item xs={3} style={{ textAlign: 'center' }} >
            <img src={titleImage} alt="titleImage" style={{ maxWidth: '100%' }} />
          </Grid>
          <Grid item xs={1} style={{ textAlign: 'right', paddingTop: '25px', paddingBottom: '25px' }}>
            <img src={openKey} alt="openKey" style={{ marginRight: '20px', maxHeight: '100%' }} />
          </Grid>
          <Grid item xs={7} className={globalStyles.fontLato} >
            {
              titleContent.description.map((description, index) => {
                return (
                  <div key={`title-${index}`} style={{ marginRight: '20px', fontSize: '12px' }}>
                    {description}
                  </div>
                )
              })
            }
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center" className={`${globalStyles.fontPoppins} ${globalStyles.secondaryComponent}`} >
            <Grid item xs={7} >
              <p style={{ color: colors.blue_1, fontWeight: 'bold', fontSize: '18px', marginBottom: '0px' }}>{titleContent.titleAction}</p>
              <p style={{ fontSize: '14px', marginTop: '0px', color: 'white' }}>{titleContent.descriptionAction}</p>
            </Grid>
            <Grid item xs={4}>
              <ColorButton variant="contained">
                <p style={{fontSize: '14px', margin: '0px'}}>
                  {titleContent.textButtonAction}
                </p>
              </ColorButton>
            </Grid>
          </Grid>
      </Hidden>
    </>
  )
}
