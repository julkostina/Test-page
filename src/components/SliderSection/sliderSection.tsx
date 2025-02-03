import React from "react";
import "./sliderSection.scss";
import { createClient } from "pexels";
import Slider from "../Slider/slider.tsx";
import SwitchTheme from "../SwitchTheme/switchTheme.tsx";
import { ThemeContext } from "../../contexts/themeContext.tsx";
const API_KEY = "MDZH88X6RquOLZQlLB8YLXZyVdRRBexxnULeI9PkELVLx3C1NY2530kN";
const SliderSection: React.FC = () => {
  const { isDark } = React.useContext(ThemeContext);
  const [photos, setPhotos] = React.useState<any[]>([]);
 
  React.useEffect(() => {
    const client = createClient(API_KEY);
    const query = "Office";

    client.photos.search({ query, per_page: 5 }).then((response) => {
      if ("photos" in response) {
        setPhotos(response.photos);
      } else {
        console.error(response);
      }
    });
  }, []);
  return (
    <section className="slider" >
      <div className="slider-container">
        <div className="slider-container-caption" style={{ backgroundColor: isDark ? "rgba(65, 65, 65, 1)" : "rgba(255, 255, 255, 1)", color: isDark ? "rgba(255, 255, 255, 1)" : "rgba(52, 52, 52, 1)" }}>
          <figure>
            <img src="./imgs/logo.svg" alt="logo"/>
            <hr />
            <figcaption>
              <p>Taking Learning to the Next Level</p>
            </figcaption>
          </figure>
          <SwitchTheme/>
        </div>
        <Slider photos={photos} />
      <hr className="slider-bottom-line"/>
      </div>
    </section>
  );
};
export default SliderSection;