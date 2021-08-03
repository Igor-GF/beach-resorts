import React from 'react';
import './App.scss';

import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Route exact path="/" component={Home} />
      <Route path="/rooms" component={Rooms} />
      <Route path="/rooms/:room" component={SingleRoom} />
      <Route path="/error" component={Error} />
    </div>
  );
}

export default App;
