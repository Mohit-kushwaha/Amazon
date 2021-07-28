import React from 'react'
import Home from './Home'
import Heading from './Heading'
import Login from './Login'
import Checkout from './Checkout'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <div className="App">
    <Router>
      <div className='app'></div>
      <Switch>
        <Route path='/checkout'>
          <Heading/>
          <Checkout/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path="/">
          <Heading/>
          <Home />
         
        </Route>
      </Switch>
    </Router>
    </div>
   
    </>
  );
}

export default App;
