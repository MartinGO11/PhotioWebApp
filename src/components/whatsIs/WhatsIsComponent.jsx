import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import globalStyle from '../../styles/global/globalStyle';
import colors from '../../styles/global/colors';

export const WhatsIsComponent = ({ whatIsContent }) => {

  const globalStyles = globalStyle();

  return (
    <>
      <Hidden smDown>
        {/* <Grid container direction="row" justify="center" alignItems="center" style={{ marginTop: '30px', fontFamily: 'Lato, sans-serif' }} > */}
          {
            whatIsContent.map((content, index) => {
              return (
                <div key={`Photio-WhatIs-${index}`}>
                  <Grid container direction="row" justify="flex-start" alignItems="center" style={{ borderLeft: `solid  30px ${index % 2 === 0 ? colors.blue_1 : colors.green_1}`, marginBottom: '30px' }} >
                    <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
                      <img src={content.img} alt={`Photio-WhatsIs-${index}`} style={{ maxWidth: '100%' }} />
                    </Grid>
                    <Grid item xs={10} md={4}>
                      {
                        content.description.map((description, i) => {
                          return (
                            <span key={`Photio-Description-${i}`} style={{ color: index % 2 === 0 ? colors.blue_1 : colors.green_1, fontSize: '18px' }}>
                              {description}
                            </span>
                          )
                        })
                      }
                    </Grid>
                  </Grid>
                </div>
              )
            })
          }
        {/* </Grid> */}
      </Hidden>

      <Hidden mdUp>
        <Grid container direction="column" justify="center" alignItems="center" style={{ marginTop: '30px', fontFamily: 'Lato, sans-serif' }} >
          {
            whatIsContent.map((content, index) => {
              return (
                <Grid item key={`Photio-WhatIs-${index}`}>
                  <Grid container direction="row" justify="flex-start" alignItems="center" style={{ borderLeft: `solid  15px ${index % 2 === 0 ? colors.blue_1 : colors.green_1}`, marginBottom: '30px' }} >
                    <Grid item xs={12} md={6}>
                      <img src={content.img} alt={`Photio-WhatsIs-${index}`} style={{ maxWidth: '90%', marginLeft: '20px' }} />
                    </Grid>
                    <Grid item xs={10} md={4}>
                      {
                        content.description.map((description, i) => {
                          return (
                            <span key={`Photio-Description-${i}`} style={{ color: index % 2 === 0 ? colors.blue_1 : colors.green_1, fontSize: '12px' }}>
                              {description}
                            </span>
                          )
                        })
                      }
                    </Grid>
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
