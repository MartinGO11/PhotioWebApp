import { Grid } from '@material-ui/core'
import React from 'react';
import useStyles from '../../styles/global/homeStyle';
import { default as newsEs } from './news-es.svg';
import { NewsCardComponent } from './NewsCardComponent';

export const NewsResumenComponents = ({ newsText }) => {

  const classesStyle = useStyles();

  return (
    <>
      <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} className={classesStyle.newsResumenComponent} style={{ paddingTop: '25px', paddingBottom: '25px' }} >
        <Grid item xs={1}>
          {/* vacio */}
        </Grid>
        <Grid item xs={7} md={3} className={classesStyle.center}>
          <img src={newsEs} alt="newsTitle" />
          <p className={classesStyle.paragraphImportant}>{newsText.description}</p>
        </Grid>
      </Grid>

      <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} className={classesStyle.newsResumenComponent} >
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
