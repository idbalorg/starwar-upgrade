import React from 'react'
import Movies from './components/Movies';
import { Route, Routes } from 'react-router-dom';
import MoreInfo from './components/MoreInfo';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element = {<Movies/>} />
        <Route path={`/more-info`} element ={<MoreInfo/>} />
      </Routes>
    </div>
  );
}

export default App;
