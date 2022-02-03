import React, { Suspense, lazy} from "react";
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.css';
import 'bulma/css/bulma.min.css'
import 'bootstrap/dist/js/bootstrap'
import '../../App.css'
import Box from '@mui/material/Box'
import Footer from '../../components/Footer';
import Cookies from 'js-cookie'
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Avatar from '@mui/material/Avatar'
const Nature = lazy(() => import('../Nature'))
const MainPage = lazy(() => import('./MainPage'))
const ArticlesData = lazy(() => import('./ArticlesData'))
const BikeHelper = lazy(() => import('./BikeHelper'))
const ForumData = lazy(() => import('./ForumData'))
const Eshop = lazy(() => import('../Eshop'))
const SignInRegistration = lazy(() => import('../../components/SignInRegistration'))
const ShoppingCart = lazy(() => import('../../components/ShoppingCart'))

export default function CyclingMNPG(){
    return(<Suspense fallback={<Backdrop
        sx={{ color: 'rgba(1,1,1,1)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>}>
    <Router>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark position-fixed top-0">
  <button class="navbar-toggler bg-white my-auto top-0" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a href=""><Avatar src="images/pathfinder.jpg" className="my-auto mx-5 " /></a>

  <Box class="collapse navbar-collapse bg-dark text-cetnter" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto text-center">
      <Link className="text-white" to="/"><i className="material-icons">home</i></Link>
      <Link className="text-white" to="/eshop">E-shop</Link>
      <Link className="text-white" to="/ForumData">Forum</Link>
      <Link className="text-white" to="/ArticlesData">Články</Link>
      <Link className="text-white" to="/Nature">Príroda</Link>
      <Link className="text-white" to="/BikeHelper">Pathfinder plus</Link>
    </ul>
    <Box className="navbar-end">
                <Box className="navbar-item text-center">
                    {Cookies.get("id") ? <ShoppingCart />: ''}
                    <SignInRegistration />
                </Box>
            </Box>
  </Box>
</nav>
      <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/eshop" component={Eshop} />
          <Route path="/ForumData" component={ForumData} />
          <Route path="/ArticlesData" component={ArticlesData} />
          <Route path="/Nature" component={Nature} />
          <Route path="/BikeHelper" component={BikeHelper} />
      </Switch>
    </Router>
    <Footer />
    </Suspense>)
}