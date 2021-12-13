import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import EventsRegister from './pages/EventsRegister';
import { AuthProvider } from './context/Auth';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={ <Home /> } />
          <Route path="events/:id" element={ <EventDetails /> } />
          <Route path="events/register" element={ <EventsRegister /> } />
      </Routes>
    </AuthProvider>
  );
}

export default App;

