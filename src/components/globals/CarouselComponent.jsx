import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import logoPhotio from './logoPhotioCarousel.svg';

export const CarouselComponent = ({ carouselContent }) => {
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
