import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import { SliderComponent } from './SliderComponent';

SwiperCore.use([Navigation, Pagination]);


export const CarouselComponent = ({carouselContent}) => {
  const slides = [];

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = () => {
    carouselContent.forEach((content, i) => {
      slides.push(
        <SwiperSlide key={`slide-${i}`} style={{textAlign: 'center'}}  >
          <SliderComponent sliderContent={content} />
        </SwiperSlide>
      )
    });
  }

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} style={{maxWidth: '100vw'}}>
        <Swiper id="main" navigation tag="section" wrapperTag="ul" >
          {
            slides
          }
        </Swiper>
      </Grid>
    </Grid>
  )
}
