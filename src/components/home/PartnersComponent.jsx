import React, { useEffect } from 'react';
import { Grid, Hidden } from '@material-ui/core';
import colors from '../../styles/global/colors';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import { SliderPartnerComponent } from './SliderPartnerComponent';

SwiperCore.use([Navigation, Pagination]);


export const PartnersComponent = ({ partnersContent }) => {

  const { clients, partners } = partnersContent;
  const slidesClient = [];
  const slidesPartner = [];

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = () => {
    clients.images.forEach((image, i) => {
      slidesClient.push(
        <SwiperSlide key={`slide-${i}`} style={{ textAlign: 'center' }}  >
          <SliderPartnerComponent sliderPartnerContent={image} />
        </SwiperSlide>
      )
    });

    partners.images.forEach((image, i) => {
      slidesPartner.push(
        <SwiperSlide key={`slide-${i}`} style={{ textAlign: 'center' }} >
          <SliderPartnerComponent sliderPartnerContent={image} />
        </SwiperSlide>
      )
    });
  }

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="flex-start" >
        <Grid item xs={0} md={1} style={{ borderBottom: `solid 3px ${colors.green_2}`, marginTop: '87px' }} />
        <Hidden smDown>
          <Grid item xs={6} md={3} style={{ borderBottom: `solid 3px ${colors.green_2}` }}>
            <p style={{ fontSize: '36px', marginBottom: '0px' }}>{clients.title}</p>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item xs={6} md={3} style={{ borderBottom: `solid 3px ${colors.green_2}` }}>
            <p style={{ fontSize: '24px', marginBottom: '0px' }}>{clients.title}</p>
          </Grid>
        </Hidden>
        <Grid item xs={5} md={8} />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" style={{ marginTop: '50px', marginBottom: '50px' }} >
        {/* {
          clients.images.map((image, index) => {
            return (
              <Grid key={`Photio-Client-${index}`} item xs={8} md={5} style={{ textAlign: 'center', maxWidth: '90%' }} >
                <img src={image} alt={'imageClient'} />
              </Grid>
            )
          })
        } */}
        <Grid item xs={10} md={8} style={{ maxWidth: '100vw' }}>
        <Hidden smDown>
        <Swiper id="main" pagination tag="section" wrapperTag="ul" slidesPerView={2} spaceBetween={30} >
            {
              slidesClient
            }
          </Swiper>
        </Hidden>
        <Hidden mdUp>
        <Swiper id="main" pagination tag="section" wrapperTag="ul" slidesPerView={1} spaceBetween={10} >
            {
              slidesClient
            }
          </Swiper>
        </Hidden>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="flex-start" >
        <Grid item xs={0} md={1} style={{ borderBottom: `solid 3px ${colors.green_2}`, marginTop: '87px' }} />
        <Hidden smDown>
          <Grid item xs={6} md={3} style={{ borderBottom: `solid 3px ${colors.green_2}` }}>
            <p style={{ fontSize: '36px', marginBottom: '0px' }}>{partners.title}</p>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item xs={10} md={3} style={{ borderBottom: `solid 3px ${colors.green_2}` }}>
            <p style={{ fontSize: '24px', marginBottom: '0px' }}>{partners.title}</p>
          </Grid>
        </Hidden>
        <Grid item xs={1} md={8} />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" style={{ marginTop: '50px', marginBottom: '50px' }} >
        {/* {
          partners.images.map((image, index) => {
            return (
              <Grid key={`Photio-Partner-${index}`} item xs={5} md={3} style={{ textAlign: 'center', maxWidth: '90%' }} >
                <img src={image} alt={'imagePartner'} />
              </Grid>
            )
          })
        } */}
        <Grid item xs={10} md={8} style={{ maxWidth: '100vw' }}>
          <Hidden smDown>
          <Swiper id="main" pagination tag="section" wrapperTag="ul" slidesPerView={3} spaceBetween={30} >
            {
              slidesPartner
            }
          </Swiper>
          </Hidden>
          <Hidden mdUp>
          <Swiper id="main" pagination tag="section" wrapperTag="ul" slidesPerView={1} spaceBetween={10} >
            {
              slidesPartner
            }
          </Swiper>
          </Hidden>
        </Grid>
      </Grid>
    </>
  )
}
