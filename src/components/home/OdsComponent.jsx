import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import globalStyle from "../../styles/global/globalStyle";
import homeStyle from "../../styles/global/homeStyle";
import { default as odsBannerDesktop } from "./odsBannerDesktop.png";
import { default as odsDesktop } from "./odsDesktop.png";

export const OdsComponent = ({ odsText }) => {
  const homeStyles = homeStyle();
  const globalStyles = globalStyle();

  return (
    <>
      <Hidden smDown>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={homeStyles.odsComponent}
        >
          <Grid item md={5}>
            <img
              src={odsBannerDesktop}
              alt="odsBanner"
              style={{ marginLeft: "30px", maxWidth: "90%" }}
            />
            <p
              className={globalStyles.paragraphImportant}
              style={{ marginLeft: "50px" }}
            >
              {odsText.description}
            </p>
          </Grid>
          <Grid item md={1} />
          <Grid item md={5} className={globalStyles.center}>
            <img src={odsDesktop} alt="ods" style={{ maxWidth: "100%" }} />
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={globalStyles.odsComponent}
          style={{ paddingBottom: "15px" }}
        >
          <Grid item xs={10} className={globalStyles.center} style={{marginTop: '20px'}}>
            <img src={odsBannerDesktop} alt="odsBanner" style={{width: '100%'}} />
          </Grid>
          <Grid item xs={10} className={globalStyles.center} style={{marginBottom: '30px'}}>
            <p style={{ fontSize: "12px", marginBottom: "0px" }}>
              {odsText.description}
            </p>
          </Grid>

          <Grid item xs={8} className={globalStyles.center}>
            <img src={odsDesktop} alt="ods" style={{ maxWidth: "100%" }} />
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
};
