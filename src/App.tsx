import React from "react";
import CounterIndex from "./Counter/CounterIndex";
import Reference from "./Reference/Reference";
import Callback from "./Callback/CallbackIndex";
import Console from "./Console/ConsoleIndex";
import UseMemoVsUseEffect from "./UseMemoVsUseEffect/UseMemoVsUseEffectIndex";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/reference">Reference</Link>
            </li>
            <li>
              <Link to="/callback">Callback</Link>
            </li>
            <li>
              <Link to="/console">Console</Link>
            </li>
            <li>
              <Link to="/memo_effect">UseMemoVsUseEffect</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/memo_effect">
            <UseMemoVsUseEffect />
          </Route>
          <Route path="/console">
            <Console />
          </Route>
          <Route path="/callback">
            <Callback />
          </Route>
          <Route path="/reference">
            <Reference />
          </Route>
          <Route path="/counter">
            <CounterIndex />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
