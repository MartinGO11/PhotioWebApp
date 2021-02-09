import { Grid } from '@material-ui/core';
import React from 'react';
import globalStyle from '../../styles/global/globalStyle';
import colors from '../../styles/global/colors';
import pinIcon from '../footer/pin.svg';
import mailIcon from '../footer/mail.svg';
import phoneIcon from '../footer/phone.svg';
import linkedinIcon from '../footer/linkedinIcon.svg';
import instagramIcon from '../footer/instagramIcon.svg';


export const FooterComponent = ({ footerView }) => {

  const globalStyles = globalStyle();

  return (
    <div className={globalStyles.footerComponent}>
      <Grid container direction="row" justify="space-evenly" alignItems="baseline">
        <Grid item xs={7} md={3}>
          <Grid container direction="row" justify="flex-start" alignItems="center" >
            <Grid item xs={2} style={{ textAlign: 'center' }} >
              <img src={pinIcon} alt={`Photio-footerItem-${footerView.address.title}`} />
            </Grid>
            <Grid item xs={10}>
              <p style={{ fontWeight: 'bold' }}> {footerView.address.title} </p>
              <p>
                <a target='_blank' href={footerView.address.link} rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                  {footerView.address.description}
                </a>
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7} md={3}>
          <Grid container direction="row" justify="flex-start" alignItems="center" >
            <Grid item xs={2} style={{ textAlign: 'center' }} >
              <img src={mailIcon} alt={`Photio-footerItem-${footerView.mail.title}`} />
            </Grid>
            <Grid item xs={10}>
              <p style={{ fontWeight: 'bold' }}> {footerView.mail.title} </p>
              <p>
                <a href={`mailto:${footerView.mail.description}`} style={{ color: 'inherit', textDecoration: 'none' }}>{
                  footerView.mail.description}
                </a>
              </p>
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={7} md={2}>
          <Grid container direction="row" justify="flex-start" alignItems="center" >
            <Grid item xs={2} style={{ textAlign: 'center' }} >
              <img src={phoneIcon} alt={`Photio-footerItem-${footerView.phone.title}`} />
            </Grid>
            <Grid item xs={10}>
              <p style={{ fontWeight: 'bold' }}> {footerView.phone.title} </p>
              <p>
                <a href={`tel:${footerView.phone.description}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {footerView.phone.description}
                </a>
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="flex-end" style={{ marginTop: '20px' }}>
        <Grid item xs={10} style={{ textAlign: 'center' }}>
          <p style={{ fontWeight: 'bold', letterSpacing: '6px', marginBottom: '30px' }}>
            <a target='_blank' href='https://www.linkedin.com/company/photio/' rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              <img src={linkedinIcon} alt="Photio-footerItem-Linkedin" style={{marginRight: '10px'}} />
            </a>
            <a target='_blank' href='https://www.instagram.com/photio.nano' rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              <img src={instagramIcon} alt="Photio-footerItem-Instagram" style={{marginRight: '10px'}} />
            </a>
            {footerView.rrss.title}</p>
          <p style={{ color: colors.gray_4 }}><span style={{ color: colors.gray_3, fontWeight: 'Bold' }}> FRACTAL - </span>Copyright 2021. Todos los derechos reservados.</p>
        </Grid>
      </Grid>
    </div>
  )
}
