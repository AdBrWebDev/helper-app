import React, { Suspense, lazy } from "react";
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.css';
import Footer from '../../components/Footer';
const Nature = lazy(() => import('../Nature'))
const MainPage = lazy(() => import('./MainPage'))
const Articles = lazy(() => import('./Articles'))
const BikeHelper = lazy(() => import('./BikeHelper'))
const Forum = lazy(() => import('./Forum'))
const Map = lazy(() => import('./Map'))

export default function CyclingMNPG(){
    return(<Suspense fallback={'loading....'}>
    <Router>
        <Link to="/">Uvod</Link>
        <Link to="/Forum">Forum</Link>
        <Link to="/Map">Mapa</Link>
        <Link to="/Articles">Články</Link>
        <Link to="/Nature">Príroda</Link>
        <Link to="/BikeHelper">Pomocník</Link>
      <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/Forum" component={Forum} />
          <Route path="/Map" component={Map} />
          <Route path="/Articles" component={Articles} />
          <Route path="/Nature" component={Nature} />
          <Route path="/BikeHelper" component={BikeHelper} />
      </Switch>
    </Router>
    <Footer />
    </Suspense>)
}