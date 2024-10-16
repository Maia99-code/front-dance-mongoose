import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UpdateAlbum from './components/UpdateAlbum';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/update/:id" element={<UpdateAlbum />} />
    </Routes>
  );
};

export default App;
