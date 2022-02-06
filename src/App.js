import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React, {Suspense, lazy, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'material-icons/iconfont/material-icons.css'
import 'materialize-css/dist/css/materialize.css'
import 'bulma/css/bulma.min.css'
import Aos from "aos";
import "aos/dist/aos.css";
import './App.css'
import Box from '@mui/material/Box'
import {AnimatePresence} from 'framer-motion'
import Grid from '@mui/material/Grid'
/*import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'*/
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
const Weather = lazy(() => import('./pages/Weather'))
const Cycling = lazy(() => import('./pages/cycling/CyclingMNPG'))
const Hiking = lazy(() => import('./pages/hiking/HikingMNPG'))
const Running = lazy(() => import('./pages/running/RunningMNPG'))
const Skiing = lazy(() => import('./pages/skiing/SkiingMNPG'))

function App() {
  useEffect(() => {
    Aos.init();
  })
  return (<Suspense fallback={<Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
  </Backdrop>}>
    <Router>
    <AnimatePresence>
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
                <Link to="/hiking">Cyklistika</Link>
                </Box>
              </Grid>
              <Grid className="text-center my-4" item xs={6} sm={6} md={3} lg={3} xl={3}>
                <Box id="circle" className="mx-auto">
                <Link to="/running">Cyklistika</Link>
                </Box>
              </Grid>
              <Grid className="text-center my-4"  item xs={6} sm={6} md={3} lg={3} xl={3}>
                <Box id="circle" className="mx-auto">
                <Link to="/skiing">Cyklistika</Link>
                </Box>
              </Grid>
  </Grid>*/}
        <nav className="bg-dark">
          <ul>
            <li>
              <Link className="nav-item" to="/c">logo</Link>
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
            {/*<Route path="/c" component={Cycling} />*/}
            <Route path="/cycling" component={Cycling} />
            <Route path="/hiking" component={Hiking} />
            <Route path="/running" component={Running} />
            <Route path="/skiing" component={Skiing} />
        </Switch>
  </Box>
  </AnimatePresence>
        </Router>
      <Weather />
        </Suspense>
  )}

export default App;