import React from "react";
import { Grid, Hidden, withStyles, Button } from "@material-ui/core";
import globalStyle from "../../styles/global/globalStyle";
import colors from "../../styles/global/colors";
import { NavLink } from "react-router-dom";

const ColorButton = withStyles((theme) => ({
  root: {
    color: colors.gray_6,
    padding: "5px 15px 5px 15px",
    backgroundColor: colors.green_2,
    fontFamily: "Poppins, sans-serif",
    "&:hover": {
      backgroundColor: colors.green_1,
    },
  },
}))(Button);

export const WelcomeComponent = ({
  titleContent,
  titleImage,
  showAction = false,
}) => {
  const globalStyles = globalStyle();

  return (
    <>
      <Hidden smDown>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={1} />
          <Grid item xs={4} md={4} style={{ textAlign: "left" }}>
            {/* <img src={titleImage} alt="titleImage" style={{ maxWidth: '100%' }} /> */}
            <h1
              className={globalStyles.fontLato}
              style={{
                color: colors.blue_1,
                fontWeight: "900",
                fontSize: "48px",
                maxWidth: '90%'
              }}
            >
              BIENVENIDOS
            </h1>
          </Grid>
          <Grid item xs={7} md={4} className={globalStyles.fontLato}>
            {titleContent.description.map((description, index) => {
              return (
                <div
                  key={`title-${index}`}
                  style={{ marginRight: "20px", fontSize: "21px" }}
                >
                  {description}
                </div>
              );
            })}
          </Grid>
          <Grid
            item
            md={3}
            className={globalStyles.fontPoppins}
            style={{ textAlign: "center" }}
          >
            <p
              className={globalStyles.paragraphTitle}
              style={{
                color: colors.blue_1,
                fontWeight: "bold",
                marginBottom: "0px",
              }}
            >
              {titleContent.titleAction}
            </p>
            <p
              className={globalStyles.paragraph}
              style={{
                marginLeft: "50px",
                marginRight: "50px",
                marginTop: "0px",
                marginBottom: "9px",
              }}
            >
              {titleContent.descriptionAction}
            </p>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/contact"
              style={{ textDecoration: "none" }}
            >
              <ColorButton variant="contained" style={{ marginBottom: "30px" }}>
                <p style={{ margin: "0px" }}>{titleContent.textButtonAction}</p>
              </ColorButton>
            </NavLink>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={10} style={{ textAlign: "center" }}>
            {/* <img
              src={titleImage}
              alt="titleImage"
              style={{ maxWidth: "100%" }}
            /> */}

            <h1
              className={globalStyles.fontLato}
              style={{
                color: colors.blue_1,
                fontWeight: "900",
                fontSize: "48px",
                margin: '10px 0px 10px 0px',
                maxWidth: '100%'
              }}
            >
              BIENVENIDOS
            </h1>
          </Grid>
          <Grid
            item
            xs={10}
            className={globalStyles.fontLato}
            style={{ paddingBottom: "20px" }}
          >
            {titleContent.description.map((description, index) => {
              return (
                <div
                  key={`title-${index}`}
                  style={{ fontSize: "12px" }}
                >
                  {description}
                </div>
              );
            })}
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={`${globalStyles.fontPoppins} ${globalStyles.secondaryComponent}`}
        >
          <Grid item xs={7}>
            <p
              style={{
                color: colors.blue_1,
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "0px",
              }}
            >
              {titleContent.titleAction}
            </p>
            <p style={{ fontSize: "14px", marginTop: "0px", color: "white" }}>
              {titleContent.descriptionAction}
            </p>
          </Grid>
          <Grid item xs={4}>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/talk"
              style={{ textDecoration: "none" }}
            >
              <ColorButton variant="contained">
                <p style={{ fontSize: "14px", margin: "0px" }}>
                  {titleContent.textButtonAction}
                </p>
              </ColorButton>
            </NavLink>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
};
