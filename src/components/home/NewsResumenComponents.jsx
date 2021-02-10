import { Grid } from '@material-ui/core'
import React from 'react';
import homeStyle from '../../styles/global/homeStyle';
import { NewsCardComponent } from './NewsCardComponent';
import colors from '../../styles/global/colors';

export const NewsResumenComponents = ({ newsText }) => {

  const homeStyles = homeStyle();

  return (
    <>
      <Grid container direction="row" justify="flex-start" alignItems="center" className={homeStyles.newsResumenComponent} >
        <Grid item xs={1} />
        <Grid item xs={10} md={2} >
          <p style={{color: colors.blue_1, fontSize: '48px', fontWeight: 'bold', marginBottom: '0px'}}>NOTICIAS</p>
          <div style={{fontSize: '18px', textTransform: 'uppercase'}}>
            {newsText.description}
          </div>
        </Grid>
      </Grid>

      <Grid container direction="row" justify="flex-start" alignItems="center" className={homeStyles.newsResumenComponent} >
        {
          newsText.news.map(article => {
            return (
              <Grid key={article.id} item xs={12} md={4}>
                <NewsCardComponent newsContent={article} />
              </Grid>
            )
          })
        }
      </Grid>
    </>
  )
}
