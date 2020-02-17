import React from 'react';

import { GlobalStyle } from './styles/global';
import SideBar from './components/SideBar';
import Player from './components/Player';
import Header from './components/Header';
import { Wrapper, Container, Content } from './styles/components';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <SideBar />
          <Content>
            <Header />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </>
  );
}

export default App;
