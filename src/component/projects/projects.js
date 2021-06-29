import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
  ButtonGroup,
  useMediaQuery,
  Paper,
} from "@material-ui/core";
import projects from "../../content/projects";

import splice from "../../content/images/splice.svg";
import explorify from "../../content/images/explorify.svg";
import apple_marketing_plan from "../../content/images/apple_marketing_plan.svg";
import personal_porfolio from "../../content/images/portfolio.svg";
import nasa from "../../content/images/nasa.svg";

import CodeIcon from "@material-ui/icons/Code";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: 10,
    spacing: 10,
  },
  gridItem: {
    align: "center",
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 30,
  },
  pc: {
    // minWidth: 450,
    // minHeight: 650,
    [theme.breakpoints.up("sm")]: {
      maxWidth: 470,
      minHeight: 710,
    },
    borderRadius: 7,
    boxShadow:
      "blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px",
    // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    display: "flex",
    justiyContent: "space-between",
    flexDirection: "column",
  },
  pc_img: {
    maxWidth: 300,
    // minHeight: 250,
    paddingBottom: 15,
  },
  pc_skills: {
    maxWidth: 420,
    padding: 10,
    margin: "auto",
    border: "1px solid black",

    // marginTop: -10,
  },
  typ_header: {
    fontFamily: "Victor-Mono-Bold",
    fontWeight: "bold",
    fontSize: "1.6em",
    paddingBottom: 15,
  },
  typ_desc: {
    fontFamily: "Circular",
    textAlign: "justify",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: -15,
  },
  typ_skills: {
    fontFamily: "Victor-Mono-Bold",
    fontSize: ".9em",
  },
  button: {
    // background: "linear-gradient(to right, #ff9966, #ff5e62)",
    // background: "linear-gradient(to right, #d3cce3, #e9e4f0)",
    // position: "absolute",
    borderRadius: 7,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .07)",
    // height: 50,
    // padding: "0 30px",
    marginTop: -15,
    fontSize: ".93em",
    fontFamily: "Circular",
    // background: "#4a4e69",
    background: "transparent",
    color: "#000",
    border: "1.5px solid black",
    "&:hover": { background: "#9a8c98", color: "#000" },
  },
}));

export default function ProjectCard2() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={10}
      direction="row"
      alignItems="center"
      justify="center"
      className={classes.gridContainer}
    >
      <Grid item className={classes.gridItem}>
        <Card className={classes.pc}>
          <CardContent>
            <Typography className={classes.typ_header}>EXPLORIFY</Typography>
            <img
              className={classes.pc_img}
              src={explorify}
              alt="explorify"
              style={{ height: 210, marginBottom: -20 }}
            />
          </CardContent>
          <CardContent>
            <Typography className={classes.typ_desc} paragraph>
              Spotify provides developers a Recommendation API that can be found{" "}
              <a
                href="https://developer.spotify.com/console/get-recommendations/"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              , disguised away from the public audience. Essentially, Explorify
              aims to unleash the potential of their API. Provided your favorite
              songs, Explorify aims to recommend you other similar tracks (if
              there is sufficient information). But, the cool thing is -
              Spotify's API also allows you to customize your final matches with
              specific track attributes such as: danceability, energy,
              popularity, tempo, and more.
            </Typography>
          </CardContent>
          <CardContent>
            <Paper variant="outlined" className={classes.pc_skills}>
              <Typography className={classes.typ_skills}>
                Express.js, Node.js, React.js, AWS EC2, PM2, Nginx, CI/CD
              </Typography>
            </Paper>
          </CardContent>
          <CardContent>
            <ButtonGroup disableElevation variant="contained">
              <Button
                className={classes.button}
                variant="contained"
                endIcon={<ExitToAppIcon />}
                target="_blank"
                href="https://www.explorify.codes"
              >
                DEMO
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                endIcon={<CodeIcon />}
                target="_blank"
                href="https://github.com/xinwng/Explorify"
              >
                GITHUB
              </Button>
            </ButtonGroup>
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Card className={classes.pc}>
          <CardContent>
            <Typography className={classes.typ_header}>SPLICE</Typography>
            <img
              className={classes.pc_img}
              src={splice}
              alt="splice"
              style={{ height: 220, marginBottom: -25 }}
            />
          </CardContent>
          <CardContent>
            <Typography className={classes.typ_desc}>
              $PLICE is a way of simplifying everyday experiences. This project
              was founded based on the desire for efficency and convenience. The
              premise of this application entails the idea to easily split the
              check when dining out with friends or family. Users can select the
              restaurant they choose and the menu for the respective restaurant
              will display. Each user will select the food they ordered and pass
              it along to the next person, and the total for each user will
              output.
            </Typography>
          </CardContent>
          <CardContent>
            <Paper variant="outlined" className={classes.pc_skills}>
              <Typography className={classes.typ_skills}>
                C++, CMake, Google Test Suite, CI/CD
              </Typography>
            </Paper>
          </CardContent>
          <CardContent>
            <ButtonGroup disableElevation variant="contained">
              <Button
                className={classes.button}
                variant="contained"
                endIcon={<CodeIcon />}
                target="_blank"
                href="https://github.com/xinwng/splice"
              >
                GITHUB
              </Button>
            </ButtonGroup>
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Card className={classes.pc}>
          <CardContent>
            <Typography className={classes.typ_header}>
              PERSONAL PORTFOLIO
            </Typography>
            <img
              className={classes.pc_img}
              src={personal_porfolio}
              alt="personal_portfolio"
            />
          </CardContent>
          <CardContent>
            <Typography className={classes.typ_desc}>
              This project is the one that you are looking at right now! During
              my off time, I try not to focus academic work (to give my brain a
              little break) and pursue my other hobbies. But, the quarantine
              offered me so much free time! I learned ReactJS, HTML, CSS, and
              Sass during Spring Break 2021 and created this personal website.
              Ever since then, I really do enjoy the short-term gratification
              React.js gives me with their instant compile and reload feature.
            </Typography>
          </CardContent>
          <CardContent>
            <Paper variant="outlined" className={classes.pc_skills}>
              <Typography className={classes.typ_skills}>
                React.js, HTML, CSS, Saas, Javascript, Bootstrap
              </Typography>
            </Paper>
          </CardContent>
          <CardContent>
            <ButtonGroup disableElevation variant="contained">
              <Button
                className={classes.button}
                variant="contained"
                endIcon={<CodeIcon />}
                target="_blank"
                href="https://github.com/xinwng/xinwng.github.io/"
              >
                GITHUB
              </Button>
            </ButtonGroup>
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Card className={classes.pc}>
          <CardContent>
            <Typography className={classes.typ_header}>NASA PDR</Typography>
            <img className={classes.pc_img} src={nasa} alt="nasa" />
          </CardContent>
          <CardContent>
            <Typography className={classes.typ_desc}>
              I participated in a 12-week long program: NASA Lucy Space Mission
              Concept Academy - designed to engage students in rigorous,
              project-based workforce development. I received mission
              development skill training from NASA scientists and engineers -
              and with a collaborative group effort amongst 7 brilliant
              students, we designed a preliminary design review (PDR)
              strategizing a payload system that intends to survive in Venus! I
              was also the Co-leader of the Science Team. 😎
            </Typography>
          </CardContent>
          <CardContent>
            <Paper variant="outlined" className={classes.pc_skills}>
              <Typography className={classes.typ_skills}>
                Strategy, Design, Research, Leadership, Teamwork
              </Typography>
            </Paper>
          </CardContent>
          <CardContent>
            <ButtonGroup disableElevation variant="contained">
              <Button
                className={classes.button}
                variant="contained"
                endIcon={<ExitToAppIcon />}
                target="_blank"
                href="https://docs.google.com/document/d/1LZLYNr6iaqxR50lXMJkE3FXMP4v0yt8N5IifEt1bURI/edit?usp=sharing"
              >
                Learn More
              </Button>
            </ButtonGroup>
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Card className={classes.pc}>
          <CardContent>
            <Typography className={classes.typ_header}>
              APPLE'S IPHONE MARKETING PLAN
            </Typography>
            <img
              className={classes.pc_img}
              src={apple_marketing_plan}
              alt="apple_marketing_plan"
              style={{ height: 210 }}
            />
          </CardContent>
          <CardContent>
            <Typography className={classes.typ_desc}>
              A 30+ page marketing plan designed to evaluate Apple's marketing
              situation in 2021 and construct strategies that propel future
              growth. It comprises of the company's profile, financial overview,
              current marketing situation, SWOT analysis, and much more. Take a
              look! I tried very hard on this.
            </Typography>
          </CardContent>
          <CardContent>
            <Paper variant="outlined" className={classes.pc_skills}>
              <Typography className={classes.typ_skills}>
                Product, Strategy, Design, Research
              </Typography>
            </Paper>
          </CardContent>
          <CardContent>
            <ButtonGroup disableElevation variant="contained">
              <Button
                className={classes.button}
                variant="contained"
                endIcon={<ExitToAppIcon />}
                target="_blank"
                href="https://docs.google.com/document/d/1bje5qloIirFweqM9K3y4k089FZEEbXnVR-Bm93dlMeQ/edit?usp=sharing"
              >
                Learn More
              </Button>
            </ButtonGroup>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
