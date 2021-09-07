import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from './page/home';
import history from './page/history';
import asso from './page/asso';
import horaires from './page/horaires';
import contact from './page/contact';
import notfound from './page/notfound';
import Button from './components/Button';
import Button1 from './components/Button1';
import Button2 from './components/Button2';


const App = () => {
  return (
    <BrowserRouter> 
<Switch>
  <Route path="/" exact component={home} />
  <Route path="/Histoire" exact component={history} />
  <Route path="/Association" exact component={asso} />
  <Route path="/Horaires" exact component={horaires} />
  <Route path="/Contact" exact component={contact} />
{/* /*Voir pour decaler les boutons dans la page horaires*/}
  <Route path="/Button" exact component= {Button}/>
  <Route path="/Button1" exact component= {Button1}/>
  <Route path="/Button" exact component= {Button2}/>
  <Route component={notfound} />
</Switch>
    </BrowserRouter>
  );
};

export default App;