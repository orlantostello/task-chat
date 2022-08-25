import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useMediaQuery from './hooks/useMediaQuery';
import Container from './components/Container/Container';
import Chat from './pages/Chat';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import ChatContainer from './components/ChatContainer/ChatContainer';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Contacts from './components/Contacts/Contacts';

function App() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <Container>
      <BrowserRouter>
        {isMobile ? (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Contacts />} />
            </Route>
            <Route path="chat/:chatid" element={<ChatContainer />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="chat" element={<Chat />} />
              <Route path="chat/:chatid" element={<ChatContainer />} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
      <ToastContainer autoClose={3000} position="top-center" theme="colored" />
    </Container>
  );
}

export default App;
