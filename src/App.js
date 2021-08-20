import './sass/App.scss'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './sections/Navbar';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './sections/Home.js';
import Movie from './sections/Movie';
import SearchResult from './sections/SearchResult';
import Footer from './sections/Footer'
import { SearchProvider } from './context/SearchContext';


function App() {
  
  return(
    <Router>
      <SearchProvider>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:id" component={Movie}/>
          <Route exact path="/search/" component={SearchResult}/>
        </Switch>
        <Footer/>
      </SearchProvider>
    </Router>
  )
}

export default App;
