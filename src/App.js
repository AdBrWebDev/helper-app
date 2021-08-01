import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, {Suspense, lazy} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.css';
import Box from '@material-ui/core/Box';
import Footer from './components/Footer';
import './App.css';
const Nature = lazy(() => import('./pages/Nature'));
const Weather = lazy(() => import('./pages/Weather'));
const Cycling = lazy(() => import('./pages/cycling/CyclingMNPG'))

function App() {
  return (
    <Suspense fallback={'loading....'}>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Cycling</Link>
            </li>
            <li>
              <Link to="/weather">Weahther</Link>
            </li>
          </ul>
        </nav>
        <Switch>
            <Route exact path="/" component={Cycling} />
            <Route path="/weather" component={Weather} />
        </Switch>
        </div>
      </Router>
      {/*<MainNav />
      <Router>
        <AppBar className="mt-5 position-fixed">
          <Toolbar>
            <Typography className="mx-5 my-auto">Helper</Typography>
            <InputBase placeholder="Hľadať..." className="text-info" />
            <Typography><Link className="mx-5" to="/">Hlavná stánka</Link></Typography>
            <Typography><Link to="/Nature">Príroda</Link></Typography>
          </Toolbar>
        </AppBar>
        <Switch>
            <Route path="/" exact component={MainPg} />
            <Route path="/Nature" component={Nature} />
        </Switch>
      </Router>
      <Weather />
      <Footer />*/}
      </Suspense>
  );
}

export default App;