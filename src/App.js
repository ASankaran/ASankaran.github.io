import React from 'react';
import { Grid, Paper, Container, Avatar, Typography, IconButton, Link } from '@material-ui/core';
import { LinkedIn, GitHub } from '@material-ui/icons';

function App() {
  return (
    <div style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
      <Container maxWidth="sm">
        <Paper>
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <Container>
                <span style={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                  <Avatar alt="Arnav Sankaran" src="/assets/headshot.jpg" style={{
                    height: 200, width: 200
                  }} />
                </span>
                <Typography variant="h2" align="center">
                  Arnav Sankaran
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12}>
              <Container>
                <Typography variant="body1" align="center">
                  Hi, I'm Arnav. I recently graduated from the University of Illinois at Urbana-Champaign
                  and will be joining Hudson River Trading in August as a Core Developer.
                  Previously I have worked at Facebook, Uber, and Ocient as a Software Engineering Intern.
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12}>
              <Container>
                <Typography variant="body1" align="center">
                  My interests lie primarily in designing and building high performance software, distributed systems, networking, and architecture.
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12}>
              <Container>
                <Typography variant="body1" align="center">
                  You can learn more about my work experience the projects I have built over the years through my LinkedIn and GitHub profiles.
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12}>
              <Container>
                <span style={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                  <Link href="https://www.linkedin.com/in/arnav-sankaran/" target="_blank">
                    <IconButton>
                      <LinkedIn htmlColor="rgb(14, 118, 168)" />
                    </IconButton>
                  </Link>
                  <Link href="https://github.com/ASankaran" target="_blank">
                    <IconButton>
                      <GitHub htmlColor="rgb(33, 31, 31)" />
                    </IconButton>
                  </Link>
                </span>
              </Container>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
