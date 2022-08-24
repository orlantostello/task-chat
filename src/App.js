import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import Chat from './pages/Chat';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import ChatContainer from './components/ChatContainer/ChatContainer';
import './App.css';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="chat" element={<Chat />} />
            <Route path="chat/:chatid" element={<ChatContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
