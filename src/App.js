import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from './page/home';
import history from './page/history';
import asso from './page/asso';
import horaires from './page/horaires';
import contact from './page/contact';
import notfound from './page/notfound';

const App = () => {
  return (
    <BrowserRouter> 
<Switch>
  <Route path="/" exact component={home} />
  <Route path="/Histoire" exact component={history} />
  <Route path="/Association" exact component={asso} />
  <Route path="/Horaires" exact component={horaires} />
  <Route path="/Contact" exact component={contact} />
  <Route component={notfound} />
</Switch>
    </BrowserRouter>
  );
};

export default App;