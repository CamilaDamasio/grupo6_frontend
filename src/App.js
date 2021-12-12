import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import EventsShow from './pages/EventsShow';
import EventsRegister from './pages/EventsRegister';


function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
        <Route path="events/:id" element={ <EventsShow /> } />
        <Route path="events/register" element={ <EventsRegister /> } />
    </Routes>
  );
}

export default App;

