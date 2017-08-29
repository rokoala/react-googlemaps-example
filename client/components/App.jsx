import React from 'react';
import Gmap from './Gmap.jsx';
import Menu from './Menu.jsx';
import { Button } from 'react-bootstrap';

export default class App extends React.Component {
  render() {
    return (
     <div>
        <Button>Teste</Button>
        <Menu/>
        <Gmap/>
      </div>);
  }
}