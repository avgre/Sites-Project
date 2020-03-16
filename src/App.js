import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import List from './List.jsx';
import Details from './Details.jsx';
import Account from './Account.jsx';
import Navbar from './Navbar.jsx';
import styled from 'styled-components';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Route path="/list" exact component={List} />
        <Route path="/account" exact component={Account} />
        <Route path="/details" exact component={Details} />
      </Container>
    </BrowserRouter>
  );
}

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 580px;
  background-color: #000000;
`;

export default App;
