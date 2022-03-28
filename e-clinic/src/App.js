import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import booking from './pages/booking';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/book' component={booking} exact/>
      </Switch>
    </Router>
  );
}

export default App;
