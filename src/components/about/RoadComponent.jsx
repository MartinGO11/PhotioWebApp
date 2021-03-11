import React from "react";
import colors from "../../styles/global/colors";
import { Grid, Hidden } from "@material-ui/core";
import globalStyle from "../../styles/global/globalStyle";

export const RoadComponent = ({ imageRoad }) => {
  const globalStyles = globalStyle();
  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid
          item
          xs={11}
          md={5}
          style={{ borderBottom: `solid 3px ${colors.green_2}` }}
        >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item md={4} xs={12} />
            <Hidden mdDown>
              <Grid item xs={8}>
                <p
                  style={{
                    fontSize: "36px",
                    marginBottom: "0px",
                    fontWeight: "bold",
                    color: colors.green_1,
                  }}
                  className={globalStyles.fontLato}
                >
                  NUESTRO CAMINO
                </p>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item xs={10}>
                <p
                  style={{
                    fontSize: "30px",
                    marginBottom: "0px",
                    fontWeight: "bold",
                    color: colors.green_1,
                  }}
                  className={globalStyles.fontLato}
                >
                  NUESTRO CAMINO
                </p>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ textAlign: "center", marginTop: "100px", maxWidth: "90%" }}
        >
          <img
            src={imageRoad}
            alt="Photio-Nuestro-Camino"
            style={{ maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
    </>
  );
};
