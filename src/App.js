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
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
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

  function defaultPage(){
    return(
      <Box className="bg-dark vh-100">
        <Box className="container p-5 text-center" style={{'marginTop': "12%"}}>
          <Avatar data-aos="zoom-in" data-aos-delay="200" src="images/pathfinder.jpg" style={{'height': '160px', 'width': '160px'}} className="mx-auto mb-5" />
          <Typography data-aos="fade-up" data-aos-delay="800" data-aos-duration="600" variant="h2" color="white">Sme radi, že si späť</Typography>
        </Box>
      </Box>
    )
  }

  return (<Suspense fallback={<Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
  </Backdrop>}>
  <Router>
    <Box className="bg-dark">
        <nav className="bg-dark">
          <ul>
            <li>
              <Link className="nav-item" to="/"><Avatar src="images/pathfinder.jpg" style={{'height': '55px', 'width': '55px'}} className="mx-5" /></Link>
            </li>
            <li>
              <Link className="nav-item text-white" to="/cycling">Cyklistika</Link>
            </li>
            <li>
               <Link className="nav-item text-white" to="/hiking">Turistika</Link>
            </li>
            <li>
              <Link className="nav-item text-white" to="/running">Beh</Link>
            </li>
            <li>
              <Link className="nav-item text-white" to="/skiing">Lyžovanie</Link>
            </li>
          </ul>
  </nav>
        <Switch>
            <Route exact path="/" component={defaultPage} />
            <Route path="/cycling" component={Cycling} />
            <Route path="/hiking" component={Hiking} />
            <Route path="/running" component={Running} />
            <Route path="/skiing" component={Skiing} />
        </Switch></Box>
        </Router>
      <Weather />
        </Suspense>
  )}

export default App;