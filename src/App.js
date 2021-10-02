import logo from './logo.svg';
import './App.css';
import Counter from "./Components/counter";
import {Route, Switch, Link, BrowserRouter as Router} from "react-router-dom";
import About from "./Components/about";
import Gallery from "./Components/gallery";
import HitDetails from "./Components/hitDetails";

function App() {
  return (
      <Router>
          <nav className="navbar navbar-expand navbar-brand m-2">
              <ul className="navbar-nav">
                  <li>
                      <Link className="nav-link" to="/home">Home</Link>
                  </li>
                  <li>
                      <Link className="nav-link" to="/counter">Counter</Link>
                  </li>
                  <li>
                      <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li>
                      <Link className="nav-link" to="/gallery">Gallery</Link>
                  </li>
              </ul>
          </nav>
          <div className="container">
              <Switch>
                  <Route path="/home"></Route>
                  <Route path="/counter" component={Counter}></Route>
                  <Route path="/about" component={About}></Route>
                  <Route path="/gallery" component={Gallery}></Route>
                  <Route path="/hitdetails/:id" component={HitDetails}></Route>
              </Switch>
          </div>
      </Router>
    /*<div className="m-3">
      <Counter title="Counter 1" value={1} image="/logo192.png" />
        <Counter title="Counter 2" value={1} image="/logo192.png" />
    </div>*/
  );
}

export default App;
