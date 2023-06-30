import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Nav from './components/Nav';
import "./App.css";
import Error from './components/Error';
import {Routes, Route} from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Nav/>
      <Error/>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
       </Routes>
    </div>
  );
}

export default App;
