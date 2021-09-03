import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import histoire from './page/histoire';
import about from './page/about';



const App = () => {
  return (
    <BrowserRouter>
<Switch>
      <Route path="/" exact component={Home} />
      <Route path="/histoire" exact component={histoire} />
      <Route path="/asso" exact component={about} />
      <Route path="/Horaires" exact component={about} />
      <Route path="/Contact" exact component={about} />
</Switch>
    </BrowserRouter>
  );
};

export default App;