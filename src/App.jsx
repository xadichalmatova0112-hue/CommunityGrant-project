import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import DiscoverInitiatives from './Pages/DiscoverInitiatives';
import Apply from './Pages/Apply';

function App() {
  return (
      <div className="bg-[#1C1C28] min-h-screen flex flex-col justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover-initiatives" element={<DiscoverInitiatives />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
