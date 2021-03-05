import React, { useState } from "react";
import { Grid, Hidden, Popover } from "@material-ui/core";
import { default as navbarItems } from "../../constants/navbarItems.json";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export const NavbarComponent = () => {
  const classes = useStyles();
  const [anchorOptions, setAnchorOptions] = useState(null);
  const open = Boolean(anchorOptions);

  const handlePopoverOpen = (event) => {
    setAnchorOptions(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorOptions(null);
  };

  return (
    <>
      <Hidden mdDown>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item md={10}>
            <p
              style={{ textAlign: "center", color: "white", fontSize: "18px" }}
            >
              {navbarItems.map((item, index) => {
                return (
                  <NavLink
                    key={`navbarItem-${index}`}
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to={item.to}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      marginLeft: "3vw",
                      marginRight: "3vw",
                    }}
                  >
                    {!item.options ? (
                      item.title
                    ) : (
                      <>
                        <span
                          onMouseEnter={handlePopoverOpen}
                          onMouseLeave={handlePopoverClose}
                        >
                          {item.title}
                        </span>
                        <Popover
                          id="mouse-over-popover"
                          className={classes.popover}
                          classes={{
                            paper: classes.paper,
                          }}
                          open={open}
                          anchorEl={anchorOptions}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                          onClose={handlePopoverClose}
                          disableRestoreFocus
                        >
                          {
                            item.options.map(option => <p>{option}</p>)
                          }
                        </Popover>
                      </>
                    )}
                  </NavLink>
                );
              })}
            </p>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
};
