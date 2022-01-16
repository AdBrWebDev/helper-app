import React, { Suspense, lazy} from "react";
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.css';
import 'bulma/css/bulma.min.css'
import '../../App.css'
import Box from '@mui/material/Box'
import Footer from '../../components/Footer';
import Cookies from 'js-cookie'
const Nature = lazy(() => import('../Nature'))
const MainPage = lazy(() => import('./MainPage'))
const ArticlesData = lazy(() => import('./ArticlesData'))
const BikeHelper = lazy(() => import('./BikeHelper'))
const ForumData = lazy(() => import('./ForumData'))
const Map = lazy(() => import('../Map'))
const Eshop = lazy(() => import('../Eshop'))
const SignInRegistration = lazy(() => import('../../components/SignInRegistration'))
const ShoppingCart = lazy(() => import('../../components/ShoppingCart'))

export default function CyclingMNPG(){
    return(<Suspense fallback={'loading....'}>
    {<Router>
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
                <Link className="navbar-item" to="/mainPage">Hlavná stránka</Link>
                <Link className="navbar-item" to="/eshop">E-shop</Link>
                <Link className="navbar-item" to="/ForumData">Forum</Link>
                <Link className="navbar-item" to="/Map">Mapa</Link>
                <Link className="navbar-item" to="/ArticlesData">Články</Link>
                <Link className="navbar-item" to="/Nature">Príroda</Link>
                <Link className="navbar-item" to="/BikeHelper">Pathfinder plus</Link>
                </Box>
            </Box>
            <Box className="navbar-end">
                <Box className="navbar-item">
                    {Cookies.get("id") ? <ShoppingCart />: ''}
                    <SignInRegistration />
                </Box>
            </Box>
        </nav>
      <Switch>
          <Route exact path="/mainPage" component={MainPage} />
          <Route path="/eshop" component={Eshop} />
          <Route path="/ForumData" component={ForumData} />
          <Route path="/Map" component={Map} />
          <Route path="/ArticlesData" component={ArticlesData} />
          <Route path="/Nature" component={Nature} />
          <Route path="/BikeHelper" component={BikeHelper} />
      </Switch>
    </Router>}
    <Footer />
    </Suspense>)
}