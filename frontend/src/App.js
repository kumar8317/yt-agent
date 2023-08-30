import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Channel from './components/Channel';
import Upload from './components/Upload';
import Approval from './components/Approval';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/channel" component={Channel} />
      <Route path="/upload" component={Upload} />
      <Route path="/approval" component={Approval} />
    </Switch>
  );
}

export default App;