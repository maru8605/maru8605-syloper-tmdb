import './sass/App.scss'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './sections/Home.js';
import Movie from './sections/Movie';
import SearchResult from './sections/SearchResult';


function App() {
  
  return(
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={Movie}/>
        <Route exact path="/search/:movie" component={SearchResult}/>
      </Switch>
    </Router>
  )
}

export default App;
