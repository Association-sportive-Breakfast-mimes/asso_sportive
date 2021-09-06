import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notfound from "./pages/Notfound";
import Horaire from "./pages/Horaire";
import Histoire from "./pages/Histoire";
import Association from "./pages/Association";
import Contact from "./pages/Contact";
import Button from "./pages/Button";
import Button1 from "./pages/Button1";
import Button2 from "./pages/Button2";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Switch>
        <Route path = "/" exact component = {Home}></Route>
        <Route path = "/Histoire" exact component = {Histoire}></Route>
        <Route path = "/Association" exact component = {Association}></Route>
        <Route path = "/Horaire" exact component = {Horaire}></Route>
        <Route path = "/Contact" exact component = {Contact}></Route>
        <Route path = "/Button" exact component = {Button}></Route>
        <Route path = "/Button1" exact component = {Button1}></Route>
        <Route path = "/Button2" exact component = {Button2}></Route>
        <Route component = {Notfound}></Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
