import { Routes, Route } from "react-router-dom";
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import FicheLogement from "./pages/FicheLogement/FicheLogement";


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
