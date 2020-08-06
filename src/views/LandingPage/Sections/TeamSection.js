import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

//import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/dom.jpg";
//import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <div>
        <GridContainer>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
            </Card >
          </GridItem>
          
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>

              <h4 className={classes.cardTitle}>
                Dominique Northecide
                <br />
                <small className={classes.smallTitle}>Designer</small>
              </h4>
                <p className={classes.description}>
                Born in Providence, Rhode Island (U.S.A.) in 1996, Dominique Northecide is a full-stack developer and designer. After earning a BFA with a concentration in Graphic Design from Florida Atlantic University in Boca Raton, he aims to obtain a master’s degree in UX/UI Design. The things he has seen and felt in his young lifetime have shaped the way he captures the world. With this, he is able to bring a new age perspective to the crowds that identify with his work. His designs derive from a spirit of expression. He is methodical about the moods and aesthetic of his work. Northecide aims to highlight important topics such as sustainability and renewable resources, as well as spark interest/shed light to the various design opportunities in the STEM fields.
                </p>
              
              <CardFooter className={classes.justifyCenter}>
                

                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                
              </CardFooter>
            </Card>
          </GridItem>
          
        </GridContainer>
      </div>
    </div>
  );
}
