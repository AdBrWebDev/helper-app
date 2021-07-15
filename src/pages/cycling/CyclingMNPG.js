import React, { Suspense, lazy } from "react";
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.css';
const MainPage = lazy(() => import('./MainPage'))
const Articles = lazy(() => import('./Articles'))
const BikeHelper = lazy(() => import('./BikeHelper'))
const Forum = lazy(() => import('./Forum'))
const Map = lazy(() => import('./Map'))
const TrackingRoute = lazy(() => import('./TrackingRoute'))

export default function CyclingMNPG(){
    return(<Suspense fallback={'loading....'}>
    <Router>
        <Link to="/">Uvod</Link>
        <Link to="/Forum">Forum</Link>
        <Link to="/Map">Mapa</Link>
        <Link to="/Articles">Články</Link>
        <Link to="/Tracking">Plánovač trasy</Link>
        <Link to="/BikeHelper">Pomocník</Link>
      <Switch>
          <Route  path="/" component={MainPage} />
          <Route exact path="/Forum" component={Forum} />
          <Route path="/Map" component={Map} />
          <Route path="/Articles" component={Articles} />
          <Route path="/Tracking" component={TrackingRoute} />
          <Route path="/BikeHelper" component={BikeHelper} />
      </Switch>
    </Router>
    </Suspense>)
}