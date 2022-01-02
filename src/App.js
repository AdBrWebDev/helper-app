import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React, {Suspense, lazy} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'material-icons/iconfont/material-icons.css'
import 'materialize-css/dist/css/materialize.css'
import 'bulma/css/bulma.min.css'
import './App.css'
import Box from '@mui/material/Box'
const Weather = lazy(() => import('./pages/Weather'))
const Cycling = lazy(() => import('./pages/cycling/CyclingMNPG'))
const Hiking = lazy(() => import('./pages/hiking/HikingMNPG'))
const Running = lazy(() => import('./pages/running/RunningMNPG'))
const Skiing = lazy(() => import('./pages/skiing/SkiingMNPG'))

function App() {
  return (
    <Suspense fallback={'loading....'}>
      <Router>
        <Box className="bg-dark">
        <nav className="bg-dark">
          <ul>
            <li>
              <Link to="/">logo</Link>
            </li>
            <li>
              <Link to="/cycling">Cyklistika</Link>
            </li>
            <li>
              <Link to="/hiking">Turistika</Link>
            </li>
            <li>
              <Link to="/running">Beh</Link>
            </li>
            <li>
              <Link to="/skiing">Lyžovanie</Link>
            </li>
          </ul>
        </nav>
        <Switch>
            {/*<Route exact path="/" component={Cycling} />*/}
            <Route path="/cycling" component={Cycling} />
            <Route path="/hiking" component={Hiking} />
            <Route path="/running" component={Running} />
            <Route path="/skiing" component={Skiing} />
        </Switch>
        </Box>
      </Router>
      <Weather />
      </Suspense>
  );
}

export default App;