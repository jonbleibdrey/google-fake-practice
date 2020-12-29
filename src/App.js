import React from "react"
import './App.css';
import Home from './pages/Home'


function App() {
  return (
    //BEM
    <div className="App">
      <h1>google clone</h1>

      {/*Home google page(the one with the search) */}
        <Home/>
      {/*SearchPage(the result page) */}

    </div>
  );
}

export default App;

