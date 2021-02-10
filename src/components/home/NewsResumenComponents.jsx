import React, { useEffect } from 'react';
import { Grid, Hidden } from '@material-ui/core'
import homeStyle from '../../styles/global/homeStyle';
import { NewsCardComponent } from './NewsCardComponent';
import colors from '../../styles/global/colors';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import { SliderNewsComponent } from './SliderNewsComponent';

SwiperCore.use([Navigation, Pagination]);

export const NewsResumenComponents = ({ newsText }) => {

  const homeStyles = homeStyle();
  const slidesNews = [];

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = () => {
    newsText.news.forEach((article, i) => {
      slidesNews.push(
        <SwiperSlide key={`slide-${i}`} style={{ textAlign: 'center' }}  >
          <SliderNewsComponent sliderNewsContent={article} />
        </SwiperSlide>
      )
    });
    console.log(slidesNews);
  }

  return (
    <>
      <Grid container direction="row" justify="flex-start" alignItems="center" className={homeStyles.newsResumenComponent} >
        <Grid item xs={1} />
        <Grid item xs={10} md={2} >
          <p style={{ color: colors.blue_1, fontSize: '48px', fontWeight: 'bold', marginBottom: '0px' }}>NOTICIAS</p>
          <div style={{ fontSize: '18px', textTransform: 'uppercase' }}>
            {newsText.description}
          </div>
        </Grid>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="center" className={homeStyles.newsResumenComponent} >
        <Hidden smDown>
          {
            newsText.news.map(article => {
              return (
                <Grid key={article.id} item xs={10} md={4}>
                  <NewsCardComponent newsContent={article} />
                </Grid>
              )
            })
          }
        </Hidden>
        <Hidden mdUp>
          <Grid item xs={10} md={4}>
            <Swiper id="main" pagination tag="section" wrapperTag="ul" slidesPerView={1} spaceBetween={10} style={{maxWidth: '100vw'}} >
              {
                slidesNews
              }
            </Swiper>
          </Grid>
        </Hidden>
      </Grid>
    </>
  )
}
