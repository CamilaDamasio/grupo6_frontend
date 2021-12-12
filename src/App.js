import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import EventShow from './pages/EventsShow';
import EventRegister from './pages/EventRegister';

function App() {
  return (
      <Routes>
        <Route exact path="/events/register" component={ EventRegister } />
        <Route exact path="/events/:id" component={ EventShow } />
        <Route exact path="/" component={ Home } />
      </Routes>
  );
}

export default App;
