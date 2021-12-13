import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import EventsShow from './pages/EventsShow';
import EventsRegister from './pages/EventsRegister';
import { AuthProvider } from './context/Auth';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={ <Home /> } />
          <Route path="events/:id" element={ <EventsShow /> } />
          <Route path="events/register" element={ <PrivateRoute><EventsRegister /></PrivateRoute> } />
      </Routes>
    </AuthProvider>
  );
}

export default App;

