import React from 'react';
import './App.css';
import Slider from './components/Slider/slider.tsx';
import NavBar from './components/NavBar/navBar.tsx';
import Footer from './components/Footer/footer.tsx';

function App() {
  return (
    <div>
    <Slider/>
    <NavBar/>
    <Footer/>
    </div>
  );
}

export default App;
