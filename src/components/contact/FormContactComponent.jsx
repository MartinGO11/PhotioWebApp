import React, { useState } from 'react';
import clsx from 'clsx';
import { Grid, FormControl, OutlinedInput, InputLabel, Button, makeStyles, Hidden } from '@material-ui/core';
import { sendFormValues } from '../../services/ContactService';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField42: {
    width: '42%',
  },
  textField20: {
    width: '20%',
  },
  textField24: {
    width: '45%',
  },
  textField85: {
    width: '85%',
  },
  input: {
    background: 'white',
    color: 'black',
  }
}));

export const FormContactComponent = ({ titleImage }) => {

  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    name: '',
    lastName: '',
    jobTitle: '',
    enterprise: '',
    phone: '',
    country: '',
    subject: '',
    message: ''
  });

  const handleChange = ({ target }) => {
    setFormValues({ ...formValues, [target.name]: target.value });
  };

  const sendForm = () => {
    sendFormValues(formValues);
  }


  return (
    <Grid container direction="column" justify="center" alignItems="stretch" style={{ marginTop: '30px', marginBottom: '50px'}} >
      <Grid item>
        <Grid container direction="row" justify="flex-start" alignItems="center" >
          <Grid item xs={2} />
          <Grid item xs={10} style={{ textAlign: 'left', marginBottom: '30px' }} >
            <img src={titleImage} alt="titleImageContact" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" justify="center" alignItems="center" >
          <Hidden smDown>
          <Grid item xs={8} style={{ textAlign: 'center' }} >
            <FormControl className={clsx(classes.margin, classes.textField42)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Nombres</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={formValues.name}
                name='name'
                onChange={handleChange}
                labelWidth={70}
                className={classes.input}
                color='primary'

              />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField42)} variant="outlined" >
              <InputLabel htmlFor="outlined-adornment-amount">Apellidos</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={formValues.name}
                name='lastName'
                onChange={handleChange}
                labelWidth={70}
                className={classes.input}
                color='primary'

              />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField20)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Cargo</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={formValues.name}
                name='jobTitle'
                onChange={handleChange}
                labelWidth={50}
                className={classes.input}
                color='primary'
              />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField20)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Empresa</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={formValues.name}
                name='enterprise'
                onChange={handleChange}
                labelWidth={70}
                className={classes.input}
                color='primary'
              />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField20)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Teléfono</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={formValues.name}
                name='phone'
                onChange={handleChange}
                labelWidth={60}
                className={classes.input}
                color='primary'

              />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField20)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">País</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={formValues.name}
                name='country'
                onChange={handleChange}
                labelWidth={40}
                className={classes.input}

                color='primary'
              />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField85)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Asunto</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={formValues.name}
                name='subject'
                onChange={handleChange}
                labelWidth={60}
                className={classes.input}
                color='primary'

              />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField85)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">¿En que te ayudamos?</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={formValues.name}
                name='message'
                onChange={handleChange}
                labelWidth={200}
                className={classes.input}
                multiline
                rows={6}
                color='primary'

              />
            </FormControl>
          </Grid>
          </Hidden>
          <Hidden mdUp>
          <Grid item xs={10} style={{ textAlign: 'center' }} >
            <FormControl className={classes.margin} fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Nombres</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={formValues.name}
                name='name'
                onChange={handleChange}
                labelWidth={70}
                className={classes.input}
                color='primary'

              />
            </FormControl>
            <FormControl className={classes.margin} fullWidth variant="outlined" >
              <InputLabel htmlFor="outlined-adornment-amount">Apellidos</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={formValues.name}
                name='lastName'
                onChange={handleChange}
                labelWidth={70}
                className={classes.input}
                color='primary'

              />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField24)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Cargo</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={formValues.name}
                name='jobTitle'
                onChange={handleChange}
                labelWidth={50}
                className={classes.input}
                color='primary'
              />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField24)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Empresa</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={formValues.name}
                name='enterprise'
                onChange={handleChange}
                labelWidth={70}
                className={classes.input}
                color='primary'
              />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField24)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Teléfono</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={formValues.name}
                name='phone'
                onChange={handleChange}
                labelWidth={60}
                className={classes.input}
                color='primary'

              />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField24)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">País</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={formValues.name}
                name='country'
                onChange={handleChange}
                labelWidth={40}
                className={classes.input}

                color='primary'
              />
            </FormControl>
            <FormControl className={classes.margin} fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Asunto</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={formValues.name}
                name='subject'
                onChange={handleChange}
                labelWidth={60}
                className={classes.input}
                color='primary'

              />
            </FormControl>
            <FormControl className={classes.margin} fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">¿En que te ayudamos?</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={formValues.name}
                name='message'
                onChange={handleChange}
                labelWidth={200}
                className={classes.input}
                multiline
                rows={6}
                color='primary'

              />
            </FormControl>
          </Grid>
          </Hidden>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" justify="center" alignItems="center" >
          <Grid item xs={2}>
            <Button variant="contained" onClick={sendForm} style={{width: '100%', background: 'green', color: 'white'}}>
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
