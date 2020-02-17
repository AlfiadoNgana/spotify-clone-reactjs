import React from 'react';

import AddPlayListIcon from '../../assets/images/add_playlist.svg';
import { Container, NewPlayList, Nav } from './style';

const SideBar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Navegar</a>
        </li>
        <li>
          <a href="">Radio</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>Sua Biblioteca</span>
        </li>
        <li>
          <a href="">Seu Daily Mix</a>
        </li>
        <li>
          <a href="">Tocados Recentimente</a>
        </li>
        <li>
          <a href="">Musicas</a>
        </li>
        <li>
          <a href="">Albuns</a>
        </li>
        <li>
          <a href="">Artistas</a>
        </li>
        <li>
          <a href="">Estacoes</a>
        </li>
        <li>
          <a href="">Arquivos Locais</a>
        </li>
        <li>
          <a href="">Videos</a>
        </li>
        <li>
          <a href="">Podcasts</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="">Melhores do Rock</a>
        </li>
      </Nav>
    </div>
    <NewPlayList>
      <img src={AddPlayListIcon} alt="Adicionar playlist" />
      Nova Lista
    </NewPlayList>
  </Container>
);

export default SideBar;
