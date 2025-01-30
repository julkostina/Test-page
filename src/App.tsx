import React from "react";
import "./App.css";
import SliderSection from "./components/SliderSection/sliderSection.tsx";
import NavBar from "./components/NavBar/navBar.tsx";
import Footer from "./components/Footer/footer.tsx";
import TalkAboutSection from "./components/TalkAboutSection/talkAboutSection.tsx";
import ProvidedServiceSection from "./components/ProvidedServiceSection/providedServiceSection.tsx";
import { ThemeContext } from "./contexts/themeContext.tsx";

function App() {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <div>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <SliderSection />
        <NavBar />
        <ProvidedServiceSection />
        <TalkAboutSection />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
