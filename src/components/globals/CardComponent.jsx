import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import globalStyle from '../../styles/global/globalStyle';

export const CardComponent = ({ cardContent, color, benefits = false }) => {

  const globalStyles = globalStyle();

  return (
    <Grid container direction="row" justify="center" alignItems="center" >
      <Hidden smDown className={globalStyles.cardComponentDesktop}>
        <Grid item md={6}>
          <img src={cardContent.img} alt="imgCard" />
        </Grid>
        <Grid item md={5} className={globalStyles.cardComponentTextDesktop}>
          <h1 style={{
            background: color,
            color: 'white',
            padding: '20px',
            marginLeft: '-25%',
            marginRight: '25%',
            fontFamily: 'Poppins, sans-serif',
            display: 'flex',
            alignItems: 'center'
          }}>
            {
              benefits &&
              <img src={cardContent.icon} alt={`Photio-Application-Icon-${cardContent.title}`} style={{ marginRight: '30px' }} />
            }
            {cardContent.title}
          </h1>
          <div style={benefits ? { borderLeft: `solid 8px ${color}` } : {}}>
            {
              cardContent.description.map((description, index) => {
                return (
                  <p key={`descriptionCard-${index}`} style={benefits ? { paddingLeft: '10px', fontSize: '18px', maxWidth: '75%' } : { fontSize: '18px', maxWidth: '75%' }}>{description}</p>
                )
              })
            }
          </div>
          {
            benefits &&
            <h2 style={{ color, fontSize: '21px' }}>{cardContent.benefitsTitle}</h2>
          }
          {
            cardContent.benefitsDescription.map((benefits, index) => {
              return (
                <p key={`benefit-${index}`} style={{ color, fontSize: '18px', maxWidth: '75%' }}>{benefits}</p>
              )
            })
          }
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid item sm={12}>
          <img src={cardContent.img} alt="imgCard" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid item md={12} style={{ background: color, color: 'white', padding: '5px 20px 5px 20px', fontFamily: 'Poppins, sans-serif', width: '100%' }}>
          <h1 style={{ fontSize: '24px' }}>
            {
              benefits &&
              <img src={cardContent.icon} alt={`Photio-Application-Icon-${cardContent.title}`} style={{ marginRight: '20px', maxHeight: '30px' }} />
            }
            {cardContent.title}
          </h1>
        </Grid>
        <Grid item xs={10} className={globalStyles.cardComponentTitleMobile}>
          <div style={benefits ? { borderLeft: `solid 8px ${color}` } : {}}>
            {
              cardContent.description.map((description, index) => {
                return (
                  <p key={`descriptionCard-${index}`} style={ benefits ?  { paddingLeft: '10px', fontFamily: 'Lato, sans-serif' }: {fontFamily: 'Lato, sans-serif'}}>{description}</p>
                )
              })
            }
          </div>
          <h2 style={{ color, fontSize: '18px' }}>{cardContent.benefitsTitle}</h2>
          {
            cardContent.benefitsDescription.map((benefits, index) => {
              return (
                <p key={`benefit-${index}`} style={{ color }}>{benefits}</p>
              )
            })
          }
        </Grid>


      </Hidden>

    </Grid>
  )
}
