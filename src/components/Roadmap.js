import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import LoopIcon from '@material-ui/icons/Loop';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Roadmap() {
  const classes = useStyles();

  return (
    <div style={{paddingTop: "100px", paddingBottom: "100px"}}>
      <div className="container">
        <h1 className="blue" style={{fontWeight: "800", marginBottom: "6rem"}}>
          Roadmap
        </h1>
        <Timeline align="alternate">

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                Q2 2021
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <CheckCircleIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={`${classes.paper} text-left p-4`}>
                <Typography className="mb-2" style={{fontWeight: "800"}} variant="h6" component="h1">
                  Launch
                </Typography>
                <Typography>
                  <ul>
                    <li>Launch of website</li>
                    <li>Token IDO on Oxbull</li>
                    <li>Token listing on Pancake Swap</li>
                    <li>Launch of MVP</li>
                    <li>Start of marketing and public awareness</li>
                  </ul>
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                Q3 2021
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LoopIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={`${classes.paper} text-left p-4`}>
                <Typography className="mb-2" style={{fontWeight: "800"}} variant="h6" component="h1">
                  Building a Playground
                </Typography>
                <Typography>
                  <ul>
                    <li>Itterate on MVP</li>
                    <li>Research and development</li>
                    <li>Team expansion</li>
                    <li>Further Marketing</li>
                  </ul>
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                Q4 2021 - Q1 2022
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <DonutLargeIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={`${classes.paper} text-left p-4`}>
                <Typography style={{fontWeight: "800"}} className="mb02" variant="h6" component="h1">
                  Product development
                </Typography>
                <Typography>
                  <ul>
                    <li>Launch of full-fledged smart NFTs</li>
                    <li>Introduce oracle-based loot boxes</li>
                    <li>Further research and development</li>
                    <li>Strategize a marketing and adoption plan</li>
                  </ul>
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                Q2 2022 - Q3 2022
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <DonutLargeIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={`${classes.paper} text-left p-4`}>
                <Typography className="mb-2" style={{fontWeight: "800"}} variant="h6" component="h1">
                  Adoption and expansion
                </Typography>
                <Typography>
                  <ul>
                    <li>Launch of our own simple game that utilizes our NFTs</li>
                    <li>Have indie game developers adopt Altura in their video-games</li>
                    <li>Further product development and iteration</li>
                  </ul>
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <DonutLargeIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={`${classes.paper} text-left p-4`}>
                <Typography className="mb-2" style={{fontWeight: "800"}} variant="h6" component="h1">
                  Further adoption and expansion
                </Typography>
                <Typography>
                  <ul>
                    <li>Have major gaming companies utilize our SDKs and APIs</li>
                    <li>Have major gaming companies roll out NFTs on Altura</li>
                    <li>Further marketing and expansion</li>
                  </ul>
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}
