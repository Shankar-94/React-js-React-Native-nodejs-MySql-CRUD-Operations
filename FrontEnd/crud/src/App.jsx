import React, { StrictMode } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Read from './Pages/Read';
import Edit from './Pages/Edit';

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' Component={Home}/>
          <Route path='/Create' Component={Create}/>
          <Route path='/Read/:id' Component={Read}/>
          <Route path='/Edit/:id' Component={Edit}/>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

export default App