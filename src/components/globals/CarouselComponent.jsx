import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import logoPhotio from "./LogoPhotioBlanco.png";
import MenuIcon from "@material-ui/icons/Menu";
import { default as navbarItems } from "../../constants/navbarItems.json";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    position: "flex",
    width: "auto",
  },
});

export const CarouselComponent = ({ carouselContent }) => {
  const classes = useStyles();
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
      style={{ backgroundColor: "#184666", height: "100%" }}
    >
      <img
        src={logoPhotio}
        alt="Photio-Logo"
        style={{
          margin: "35% 10%",
          maxWidth: "8%",
        }}
      />

      <List>
        {navbarItems.map((item, index) => (
          <ListItem button key={item.title}>
            <NavLink
              key={`navbarItem-${index}`}
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to={item.to}
              style={{ textDecoration: "none", color: "white" }}
            >
              {item.title}
            </NavLink>
            <Divider />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12}>
        <div
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${carouselContent[0].background})`,
            height: "90vh",
          }}
        >
          <Hidden smDown>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={logoPhotio}
                alt="Photio-Logo"
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "5%",
                  marginRight: "10vw",
                  textAlign: "left",
                  maxWidth: "8%",
                }}
              />
            </NavLink>
            <p
              style={{
                color: "white",
                fontSize: "16px",
                padding: "40px 2vw 40px 30px",
                background: "rgba(24,70,102,0.8)",
                position: "absolute",
                top: "60vh",
                left: "50%",
                textAlign: "left",
                width: "50%",
              }}
            >
              {carouselContent[0].description}
            </p>
          </Hidden>
          <Hidden mdUp>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={logoPhotio}
                alt="Photio-Logo"
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "10%",
                  marginRight: "10vw",
                  textAlign: "left",
                  maxWidth: "20%",
                }}
              />
            </NavLink>
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

            <p
              style={{
                color: "white",
                fontSize: "14px",
                padding: "20px 30px 20px 30px",
                background: "rgba(24,70,102,0.8)",
                position: "absolute",
                top: "50%",
                left: "20%",
                textAlign: "left",
              }}
            >
              {carouselContent[0].description}
            </p>
          </Hidden>
        </div>
      </Grid>
    </Grid>
  );
};
