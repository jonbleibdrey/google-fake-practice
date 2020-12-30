import React from "react"
import './App.css';
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    //BEM
    <div className="App">
      <Router>
        <Switch>

         <Route path="/search">
           <h1>this is search page</h1>
          {/* <SearchPage/> */}
         </Route>

         <Route path='/'>
          <Home />
         </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

