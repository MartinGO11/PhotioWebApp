import { Grid } from '@material-ui/core'
import React from 'react';
import homeStyle from '../../styles/global/homeStyle';
import globalStyle from '../../styles/global/globalStyle';
import { default as newsEs } from './news-es.svg';
import { NewsCardComponent } from './NewsCardComponent';

export const NewsResumenComponents = ({ newsText }) => {

  const homeStyles = homeStyle();
  const globalStyles = globalStyle();

  return (
    <>
      <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} className={homeStyles.newsResumenComponent} >
        <Grid item xs={1}>
          {/* vacio */}
        </Grid>
        <Grid item xs={7} md={3} className={globalStyles.center}>
          <img src={newsEs} alt="newsTitle" />
          <p className={globalStyles.paragraphImportant}>{newsText.description}</p>
        </Grid>
      </Grid>

      <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} className={homeStyles.newsResumenComponent} >
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
