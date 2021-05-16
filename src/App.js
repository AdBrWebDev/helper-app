import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, {Suspense} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
/*import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/icons/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcons from '@material-ui/icons/Search';*/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import Footer from './components/Footer';
const MainPg = React.lazy(() => import('./pages/MainPg'));
const Nature = React.lazy(() => import('./pages/Nature'));

function App() {
  return (
    <Suspense fallback={'loading....'}>
      <Router>
        <AppBar className="bg-dark">
          <Toolbar>
            <Typography className="mx-5 my-auto">Helper</Typography>
            <InputBase placeholder="Hľadať..." />
            <Typography><Link className="mx-5" to="/">Hlavná stánka</Link></Typography>
            <Typography><Link to="/Nature">Príroda</Link></Typography>
          </Toolbar>
        </AppBar>
        <Switch>
            <Route path="/" exact component={MainPg} />
            <Route path="/Nature" component={Nature} />
        </Switch>
      </Router>
      <Footer />
      </Suspense>
  );
}

export default App;