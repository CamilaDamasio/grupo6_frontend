import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import EventShow from './pages/EventShow';
import EventRegister from './pages/EventRegister';


function App() {
  return (
      <Switch>
        <Route exact path="/events/register" component={ EventRegister } />
        <Route exact path="/events/:id" component={ EventShow } />
        <Route exact path="/" component={ Home } />
      </Switch>
  );
}

export default App;
