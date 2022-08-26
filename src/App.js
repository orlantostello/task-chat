import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Container from './components/Container/Container';
import Chat from './pages/Chat';
import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute';
import Notfoundpage from './pages/Notfoundpage';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route exact="true" path="/login" element={<Login />} />
          <Route path="*" element={<Notfoundpage />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </PrivateRoute>
            }
          />
          <Route path="/chat/:chatid" element={<Chat />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={3000} position="top-center" theme="colored" />
    </Container>
  );
}

export default App;
