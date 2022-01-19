import {Link, BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import React, {Suspense, lazy} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'material-icons/iconfont/material-icons.css'
import 'materialize-css/dist/css/materialize.css'
import 'bulma/css/bulma.min.css'
import './App.css'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
const Weather = lazy(() => import('./pages/Weather'))
const Cycling = lazy(() => import('./pages/cycling/CyclingMNPG'))
const Hiking = lazy(() => import('./pages/hiking/HikingMNPG'))
const Running = lazy(() => import('./pages/running/RunningMNPG'))
const Skiing = lazy(() => import('./pages/skiing/SkiingMNPG'))

function App() {
  return (
    <Suspense fallback={"loading..."}>
      <Router>
        <Box className="bg-dark">
          {/*<Box style={{'paddingTop': '20%'}}>
          <Grid container >
              <Grid className="text-center my-4" item xs={6} sm={6} md={3} lg={3} xl={3}>
                <Box id="circle" className="mx-auto">
                <Link to="/cycling">Cyklistika</Link>
                </Box>
              </Grid>
              <Grid className="text-center my-4" item xs={6} sm={6} md={3} lg={3} xl={3}>
                <Box id="circle" className="mx-auto">
                <Link to="/cycling">Cyklistika</Link>
                </Box>
              </Grid>
              <Grid className="text-center my-4" item xs={6} sm={6} md={3} lg={3} xl={3}>
                <Box id="circle" className="mx-auto">
                <Link to="/cycling">Cyklistika</Link>
                </Box>
              </Grid>
              <Grid className="text-center my-4"  item xs={6} sm={6} md={3} lg={3} xl={3}>
                <Box id="circle" className="mx-auto">
                <Link to="/cycling">Cyklistika</Link>
                </Box>
              </Grid>
  </Grid>*/}
        <nav className="bg-dark">
          <ul>
            <li>
              <Link className="nav-item" to="/">logo</Link>
            </li>
            <li>
              <Link className="nav-item" to="/cycling">Cyklistika</Link>
            </li>
            <li>
              <Link className="nav-item" to="/hiking">Turistika</Link>
            </li>
            <li>
              <Link className="nav-item" to="/running">Beh</Link>
            </li>
            <li>
              <Link className="nav-item" to="/skiing">Lyžovanie</Link>
            </li>
          </ul>
      </nav>
        <Switch>
            {<Route exact path="/" component={Cycling} />}
            <Route path="/cycling" component={Cycling} />
            <Route path="/hiking" component={Hiking} />
            <Route path="/running" component={Running} />
            <Route path="/skiing" component={Skiing} />
        </Switch>
        </Box>
        </Router>
      <Weather />
      </Suspense>);
}

export default App;