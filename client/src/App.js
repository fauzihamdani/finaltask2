import { useEffect, useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom';

import PrivateRoute from './components/routes/PrivateRoute';
import PrivateRouteAdmin from './components/routes/PrivateRouteAdmin';

import AuthContext from './contexts/auth/authContext';

// import pages
import AddArtist from './pages/AddArtist';
import AddMusic from './pages/AddMusic';
import Index from './pages/Index';
import Payment from './pages/Payment';
import Transaction from './pages/Transaction';
import Home from './pages/Home';
import { setAuthToken } from './config/api';

if (localStorage.token) {
   setAuthToken(localStorage.token);
}

function App() {
   const authContext = useContext(AuthContext);
   const { loadUser } = authContext;

   useEffect(() => {
      loadUser();
      // eslint-disable-next-line
   }, []);
   return (
      <div>
         <Router>
            <Switch>
               <Route path="/" component={Index} exact />
               <PrivateRoute path="/home" component={Index} exact />
               <PrivateRoute
                  path="/transactions"
                  component={Transaction}
                  exact
               />
               <PrivateRoute path="/add-artist" component={AddArtist} exact />
               <PrivateRoute path="/add-music" component={AddMusic} exact />
               <PrivateRoute path="/payment" component={Payment} exact />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
