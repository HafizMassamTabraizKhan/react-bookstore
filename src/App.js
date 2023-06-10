import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import RenderBooks from './components/RenderBooks';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<RenderBooks />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
