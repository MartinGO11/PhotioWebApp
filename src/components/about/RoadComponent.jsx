import React from "react";
import colors from "../../styles/global/colors";
import { Grid } from "@material-ui/core";
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
          xs={6}
          md={5}
          style={{ borderBottom: `solid 3px ${colors.green_2}` }}
        >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item xs={4} />
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
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "100px", maxWidth: '90%' }}>
          <img src={imageRoad} alt="Photio-Nuestro-Camino" />
        </Grid>
      </Grid>
    </>
  );
};
