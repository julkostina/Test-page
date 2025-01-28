import React from 'react';
import './App.css';
import SliderSection from './components/SliderSection/sliderSection.tsx';
import NavBar from './components/NavBar/navBar.tsx';
import Footer from './components/Footer/footer.tsx';
import TalkAboutSection from './components/TalkAboutSection/talkAboutSection.tsx';
import ProvidedServiceSection from './components/ProvidedServiceSection/providedServiceSection.tsx';

function App() {
  return (
    <div>
    <SliderSection/>
    <NavBar/>
    <ProvidedServiceSection/>
    <TalkAboutSection/>
    <Footer/>
    </div>
  );
}

export default App;
