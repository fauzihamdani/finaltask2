import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom';

// import pages
import AddArtist from './pages/AddArtist';
import AddMusic from './pages/AddMusic';
import Index from './pages/Index';

function App() {
   return (
      <div>
         <Router>
            <Switch>
               <Route path="/" component={Index} exact />
               <Route path="/add-artist" component={AddArtist} exact />
               <Route path="/add-music" component={AddMusic} exact />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
