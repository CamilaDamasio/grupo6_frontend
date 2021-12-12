import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import EventShow from './pages/EventsShow';
import EventRegister from './pages/EventRegister';

function App() {
  return (
      <Routes>
        <Route path="/events/register" element={ <EventRegister /> } />
        <Route path="/events/:id" element={  <EventShow /> } />
        <Route path="/" element={ <Home /> } />
      </Routes>
  );
}

export default App;
