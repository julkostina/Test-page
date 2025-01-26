import React from 'react';
import './App.css';
import SliderSection from './components/SliderSection/sliderSection.tsx';
import NavBar from './components/NavBar/navBar.tsx';
import Footer from './components/Footer/footer.tsx';
import TalkAboutSection from './components/TalkAboutSection/talkAboutSection.tsx';

function App() {
  return (
    <div>
    <SliderSection/>
    <NavBar/>
    <TalkAboutSection/>
    <Footer/>
    </div>
  );
}

export default App;
