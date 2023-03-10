import React, { useState } from "react";
import clsx from "clsx";
import {
  Grid,
  FormControl,
  OutlinedInput,
  InputLabel,
  Button,
  makeStyles,
  Hidden,
  withStyles,
} from "@material-ui/core";
import { sendFormValues } from "../../services/ContactService";
import colors from "../../styles/global/colors";
import { default as navbarItems } from "../../constants/navbarItems.json";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import globalStyle from "../../styles/global/globalStyle";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField42: {
    width: "42%",
  },
  textField20: {
    width: "20%",
  },
  textField24: {
    width: "45%",
  },
  textField85: {
    width: "85%",
  },
  input: {
    background: "white",
    color: "black",
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: colors.gray_6,
    marginTop: "30px",
    fontSize: "18px",
    padding: "10px 15px 10px 15px",
    backgroundColor: colors.green_2,
    fontFamily: "Poppins, sans-serif",
    width: "100%",
    "&:hover": {
      backgroundColor: colors.green_1,
    },
  },
}))(Button);

export const FormContactComponent = ({ titleImage }) => {
  const classes = useStyles();
  const globalStyles = globalStyle();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formValues, setFormValues] = useState({
    names: "",
    last_name: "",
    position: "",
    company: "",
    country: "",
    phone: "",
    email: "",
    subject: "",
    text: "",
  });

  const handleChange = ({ target }) => {
    setFormValues({ ...formValues, [target.name]: target.value });
  };

  const sendForm = () => {
    setLoading(true);
    sendFormValues(formValues)
      .then((responseApi) => {
        setLoading(!responseApi);
        setSuccess(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navbarItems.map((item, index) => (
          <ListItem button key={item.title}>
            <NavLink
              key={`navbarItem-${index}`}
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to={item.to}
              style={{ textDecoration: "none" }}
            >
              <ListItemText primary={item.title} />
            </NavLink>
            <Divider />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        style={{ marginTop: "30px" }}
      >
        <Grid item xs={1} md={2} />
        <Grid item xs={5} style={{ textAlign: "left", marginBottom: "30px" }}>
          <h1
            className={globalStyles.fontLato}
            style={{ color: "white", fontWeight: "900", fontSize: "48px" }}
          >
            CONTACTO
          </h1>
        </Grid>
        <Hidden mdUp>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <>
              <MenuIcon
                style={{
                  fontSize: "30px",
                  color: "white",
                  position: "absolute",
                  top: "5%",
                  left: "85%",
                }}
                onClick={toggleDrawer("right", true)}
              />
              <SwipeableDrawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
                onOpen={toggleDrawer("right", true)}
              >
                {list("right")}
              </SwipeableDrawer>
            </>
          </Grid>
        </Hidden>
      </Grid>
      {!success && (
        <>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={10} md={8} style={{ margin: "10px 0px 10px 0px" }}>
              <FormControl variant="outlined" style={{ width: "100%" }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Nombre y Apellido
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={formValues.names}
                  name="names"
                  onChange={handleChange}
                  labelWidth={70}
                  className={classes.input}
                  color="primary"
                />
              </FormControl>
            </Grid>
            <Grid item xs={10} md={8} style={{ margin: "10px 0px 10px 0px" }}>
              <FormControl variant="outlined" style={{ width: "100%" }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={formValues.email}
                  name="email"
                  onChange={handleChange}
                  labelWidth={70}
                  className={classes.input}
                  color="primary"
                />
              </FormControl>
            </Grid>

            <Grid item xs={10} md={8} style={{ margin: "10px 0px 10px 0px" }}>
              <FormControl variant="outlined" style={{ width: "100%" }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Tel??fono
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={formValues.phone}
                  name="phone"
                  onChange={handleChange}
                  labelWidth={60}
                  className={classes.input}
                  color="primary"
                  type="number"
                />
              </FormControl>
            </Grid>
            <Grid item xs={10} md={8} style={{ margin: "10px 0px 10px 0px" }}>
              <FormControl style={{ width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Asunto
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={formValues.subject}
                  name="subject"
                  onChange={handleChange}
                  labelWidth={60}
                  className={classes.input}
                  color="primary"
                />
              </FormControl>
            </Grid>
            <Grid item xs={10} md={8} style={{ margin: "10px 0px 10px 0px" }}>
              <FormControl style={{ width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  ??En qu?? te ayudamos?
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={formValues.text}
                  name="text"
                  onChange={handleChange}
                  labelWidth={200}
                  className={classes.input}
                  multiline
                  rows={6}
                  color="primary"
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={10} md={6}>
              <ColorButton variant="contained" onClick={sendForm} disabled={loading}>
                { loading ? 'Enviando datos...' : 'Enviar'}
              </ColorButton>
            </Grid>
          </Grid>
        </>
      )}
      {
        success &&
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item style={{ textAlign: 'center'}}>
              <h1>??Su mensaje ha sido enviado correctamente!</h1>
              <h3>Pronto nos contactaremos con usted.</h3>
            </Grid>
          </Grid>
      }
    </>
  );
};
