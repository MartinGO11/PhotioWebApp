import { Grid } from '@material-ui/core';
import React from 'react';
import globalStyle from '../../styles/global/globalStyle';
import colors from '../../styles/global/colors';
import { default as navbarItems } from '../../constants/navbarItems.json';


export const FooterComponent = ({ footerView }) => {

  const globalStyles = globalStyle();

  return (
    <div className={globalStyles.footerComponent}>
      <Grid container direction="row" justify="flex-end" alignItems="baseline">
        <Grid item md={3}>
          <p style={{ fontWeight: 'bold' }}> {footerView.address.title} </p>
          <p>
            <a target='_blank' href={footerView.address.link} style={{ color: 'inherit', textDecoration: 'none' }}>
              {footerView.address.description}
            </a>
          </p>
        </Grid>
        <Grid item md={3}>
          <p style={{ fontWeight: 'bold' }}> {footerView.mail.title} </p>
          <p>
            <a href={`mailto:${footerView.mail.description}`} style={{ color: 'inherit', textDecoration: 'none' }}>{
              footerView.mail.description}
            </a>
          </p>
        </Grid>
        <Grid item md={2}>
          <p style={{ fontWeight: 'bold' }}> {footerView.phone.title} </p>
          <p>
            <a href={`tel:${footerView.phone.description}`} style={{color: 'inherit', textDecoration: 'none'}}>
              {footerView.phone.description}
            </a>
          </p>
        </Grid>
        <Grid item md={2} style={{ textAlign: 'right', marginRight: '50px' }}>
          {
            navbarItems.map((menuItem, index) => {
              return (
                <p key={`menuItem-${index}`}>{menuItem.title}</p>
              )
            })
          }
          <p style={{ fontWeight: 'bold', letterSpacing: '6px' }}>{footerView.rrss.title}</p>
        </Grid>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="flex-end">
        <Grid item xs={12}>
          <p style={{ color: colors.gray_4, textAlign: 'center' }}><span style={{ color: colors.gray_3, fontWeight: 'Bold' }}> FRACTAL - </span>Copyright 2021. Todos los derechos reservados.</p>
        </Grid>
      </Grid>
    </div>
  )
}
