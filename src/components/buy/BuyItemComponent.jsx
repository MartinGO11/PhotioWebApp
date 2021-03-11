import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import colors from "../../styles/global/colors";
import globalStyle from "../../styles/global/globalStyle";
import { default as buyIcon } from "./buyIcon.png";
import { default as serviceIcon } from "./serviceIcon.png";

const icons = [serviceIcon, buyIcon];

export const BuyItemComponent = ({ buyContent }) => {
  const globalStyles = globalStyle();

  return (
    <>
      <Hidden smDown>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
          style={{ paddingTop: "2%", paddingBottom: "2%" }}
        >
          {buyContent.map((item, index) => {
            return (
              <Grid
                item
                xs={3}
                key={`Photio-buyItem-${index}`}
                style={{ textAlign: "center", color: colors.blue_1 }}
                className={globalStyles.fontLato}
              >
                <img
                  src={icons[index]}
                  alt={`Photio-service-${index}`}
                  style={{ maxWidth: "25%", textAlign: "center" }}
                />
                <h1 style={{ fontSize: "24px" }}>{item.title}</h1>
                <p style={{ fontSize: "18px" }}>{item.description}</p>
              </Grid>
            );
          })}
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ paddingTop: "5%", paddingBottom: "5%" }}
        >
          {buyContent.map((item, index) => {
            return (
              <Grid
                key={`Photio-buyItem-${index}`}
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item xs={3}>
                  <img
                    src={icons[index]}
                    alt={`Photio-service-${index}`}
                    style={{ textAlign: "center", maxWidth: '50%', marginTop: '20px' }}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{ color: colors.blue_1 }}
                  className={globalStyles.fontLato}
                >
                  <h1 style={{ fontSize: "18px" }}>{item.title}</h1>
                  <p style={{ fontSize: "12px" }}>{item.description}</p>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Hidden>
    </>
  );
};
