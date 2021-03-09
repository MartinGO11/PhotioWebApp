import React from "react";
import colors from "../../styles/global/colors";
import { Grid } from "@material-ui/core";
import globalStyle from "../../styles/global/globalStyle";

export const RecognitionComponent = ({ recognitionContent }) => {
  const globalStyles = globalStyle();
  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        style={{marginBottom: '100px'}}
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
                RECONOCIMIENTOS
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "100px" }}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            {recognitionContent.map((recognition, index) => {
              return (
                <Grid
                  item
                  xs={4}
                  key={`Photio_Recognition_${index}`}
                  style={{ textAlign: "center" }}
                >
                  <img src={recognition.logo} alt="LogoRecognition" style={{maxWidth: '40%'}} />
                  {recognition.description.map((paragraph, indexParagraph) => {
                    return (
                      <p
                        key={`Photio_Paragraph_${indexParagraph}`}
                        className={globalStyles.fontLato}
                        style={{ fontSize: "15px", fontWeight: "medium", margin: '0px'}}
                      >
                        {" "}
                        {paragraph}{" "}
                      </p>
                    );
                  })}
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
