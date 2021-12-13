import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import EventsRegister from './pages/EventsRegister';
import { AuthProvider } from './context/Auth';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/events/register" component={ EventsRegister } />
        <Route exact path="/events/:id" component={ EventDetails } />
      </Switch>
    </AuthProvider>
  );
}

export default App;

