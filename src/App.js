import React from 'react';

import { GlobalStyle } from './styles/global';
import SideBar from './components/SideBar';
import Player from './components/Player';
import { Wrapper, Container } from './styles/components';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <SideBar />
        </Container>
        <Player />
      </Wrapper>
    </>
  );
}

export default App;
