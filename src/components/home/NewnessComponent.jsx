import { Grid, Hidden } from "@material-ui/core";
import React from "react";
import colors from "../../styles/global/colors";
import newnessImage from "./newnessImage.png";
import newnessVideo from "./newnessVideo.mp4";
import background from "./backgroundNewness.png";
import globalStyle from "../../styles/global/globalStyle";

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
          <Grid
            item
            xs={12}
            md={6}
            // style={{
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",
            //   backgroundSize: "cover",
            //   backgroundImage: `url(${background})`,
            //   height: "50vh",
            //   display: "flex",
            //   alignItems: "center",
            // }}
          >
            {/* <p
              className={globalStyles.fontPoppins}
              style={{ fontSize: "18px", color: "white", marginLeft: "40%" }}
            >
              RUTAS <span style={{ fontWeight: "900" }}>SUSTENTABLES</span>{" "}
            </p> */}
            <video autoPlay muted loop height='300'>
              <source src={newnessVideo} type='video/mp4' />
              Tu navegador no soporta HTML5 audio.
            </video>
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
            style= {{
              textAlign: 'center'
            }}
            // style={{
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",
            //   backgroundSize: "cover",
            //   backgroundImage: `url(${background})`,
            //   height: "50vh",
            //   display: "flex",
            //   alignItems: "center",
            //   marginTop: '20px'
            // }}
          >
            {/* <p
              className={globalStyles.fontPoppins}
              style={{ fontSize: "18px", color: "white", marginLeft: "25%" }}
            >
              RUTAS <span style={{ fontWeight: "900" }}>SUSTENTABLES</span>{" "}
            </p> */}
            <video autoPlay muted loop style={{width: '90%'}}>
              <source src={newnessVideo} type='video/mp4' />
              Tu navegador no soporta HTML5 audio.
            </video>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
};
