import { Grid, Hidden } from "@material-ui/core";
import React from "react";
import colors from "../../styles/global/colors";
import globalStyle from "../../styles/global/globalStyle";
import newnessVideo from "./newnessVideo.mp4";

export const NewnessComponent = ({ newnessText }) => {
  const globalStyles = globalStyle();

  return (
    <>
      <Hidden smDown>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={1} />
          <Grid item xs={10} md={3}>
            <p
              style={{
                color: colors.blue_1,
                fontSize: "48px",
                fontWeight: "bold",
                marginBottom: "0px",
              }}
            >
              NOVEDADES
            </p>
            <div style={{ fontSize: "18px", textTransform: "uppercase" }}>
              {newnessText.description}
            </div>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={12} md={6} style={{ position: "relative", maxWidth: '550px' }}>
            <video autoPlay muted loop height="300">
              <source src={newnessVideo} type="video/mp4" />
              Tu navegador no soporta HTML5 audio.
            </video>
            <p
              style={{
                position: "absolute",
                top: "45%",
                left: 'calc(50% - 119px)',
                color: "white",
                fontSize: "24px",
                margin: "0px",
              }}
              className={globalStyles.fontPoppins}
            >
              Rutas <span style={{ fontWeight: "bold" }}>sustentables</span>
            </p>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={1} />
          <Grid item xs={10}>
            <p
              style={{
                color: colors.blue_1,
                fontSize: "36px",
                fontWeight: "bold",
                marginBottom: "0px",
              }}
            >
              NOVEDADES
            </p>
            <div style={{ fontSize: "14px", textTransform: "uppercase" }}>
              {newnessText.description}
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              textAlign: "center",
              position: "relative",
            }}
          >
            <video autoPlay muted loop style={{ width: "90%" }}>
              <source src={newnessVideo} type="video/mp4" />
              Tu navegador no soporta HTML5 audio.
            </video>
            <p
              style={{
                position: "absolute",
                top: "45%",
                left: 'calc(50% - 90px)',
                color: "white",
                fontSize: "18px",
                margin: "0px",
              }}
              className={globalStyles.fontPoppins}
            >
              Rutas <span style={{ fontWeight: "bold" }}>sustentables</span>
            </p>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
};
