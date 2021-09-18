import React, { Suspense, lazy } from "react";
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.css';
import 'bulma/css/bulma.min.css'
import Box from '@mui/material/Box'
import Footer from '../../components/Footer';
const Nature = lazy(() => import('../Nature'))
const MainPage = lazy(() => import('./MainPage'))
const Articles = lazy(() => import('./Articles'))
const BikeHelper = lazy(() => import('./BikeHelper'))
const Forum = lazy(() => import('./Forum'))
const Map = lazy(() => import('../Map'))
const Eshop = lazy(() => import('../Eshop'))

export default function CyclingMNPG(){
    return(<Suspense fallback={'loading....'}>
    <Router>
        <nav className="navbar is-dark px-5 shadow position-fixed top-0">
            <Box className="navbar-brand">
                <Link className="navbar-item" href="#"></Link>
                <Box className="navbar-burger" data-target="navbar">
                    <span></span>
                    <span></span>
                    <span></span>
                </Box>
            </Box>
            <Box id="navbar" className="navbar-menu">
                <Box className="navbar-start">
                <Link className="navbar-item" to="/">Uvod</Link>
                <Link className="navbar-item" to="/eshop">E-shop</Link>
                <Link className="navbar-item" to="/Forum">Forum</Link>
                <Link className="navbar-item" to="/Map">Mapa</Link>
                <Link className="navbar-item" to="/Articles">Články</Link>
                <Link className="navbar-item" to="/Nature">Príroda</Link>
                <Link className="navbar-item" to="/BikeHelper">Pomocník</Link>
                </Box>
            </Box>
        </nav>
      <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/eshop" component={Eshop} />
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