import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import Chat from './pages/Chat';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import ChatContainer from './components/ChatContainer/ChatContainer';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { getMessage } from './redux/messages/messagesOperations';

function App() {
  // const dispatch = useDispatch();
  // const { test } = useSelector(state => state.contactsReduser);

  // useEffect(() => {
  //   dispatch(getMessage());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // console.log('test', test);
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
