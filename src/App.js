import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotron';

import { GlobalStyle } from './styles/global';
import SideBar from './components/SideBar';
import Player from './components/Player';
import Header from './components/Header';
import ErrorBox from './components/ErrorBox';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Wrapper>
          <Container>
            <SideBar />
            <Content>
              <ErrorBox />
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
