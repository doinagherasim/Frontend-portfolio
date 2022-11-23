import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from "./components/login/Login";
import FeedTheCat from './components/feedApp/feedTheCat';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/feedthecat/:name' exact element={<FeedTheCat />} />
      </Routes >
    </div >
  );
}

export default App;
