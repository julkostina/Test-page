import React from "react";
import "./slider.scss";
import { createClient } from "pexels";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SlideItem from "../SlideItem/slideItem.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const API_KEY = "MDZH88X6RquOLZQlLB8YLXZyVdRRBexxnULeI9PkELVLx3C1NY2530kN";
const Slider: React.FC = () => {
  const thumbStyles = {
    backgroundColor: "rgba(255, 255, 255, 1)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginTop: "-2px",
    height: "40px",
    width: "40px",
  };
  const trackStyles = {
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "14.4px",
    textAlign: "center",
  };
  const slideId = [0,2,4];
  const [photos, setPhotos] = React.useState<any[]>([]);
  const photo_titles = [
    "Services",
    "Instructional Design",
    "eLearning Development",
    "eLearning Price Quote",
    "eLearning Packages",
    "Contact us",
  ];
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
  console.log("photos", photos);
  return (
    <section className="slider" >
      <div className="slider-container">
        <div className="slider-container-caption">
          <figure>
            <img src="./imgs/logo.svg" alt="logo" />
            <hr />
            <figcaption>
              <p>Taking Learning to the Next Level</p>
            </figcaption>
          </figure>
          <FormControlLabel
            sx={{
              justifySelf: "center",
              margin: "0",
              height: "30px",
              width: "130px",
              "& .MuiSwitch-root": {
                width: "100%",
                overflow: "visible",
              },
              "& .MuiSwitch-switchBase.Mui-checked": {
                "& + .MuiSwitch-track": {
                  backgroundColor: "rgba(235, 235, 235, 1)",
                  ...trackStyles,
                },
                "& .MuiSwitch-thumb": {
                  ...thumbStyles,
                  backgroundImage: "url(./imgs/light.svg)",
                  transform: "translateX(60px)",
                },
                "& + :before": {
                  content: '"DAYMODE"',
                  position: "absolute",
                  top: "20px",
                  color: "rgba(52, 52, 52, 1)",
                  right: "50px",
                },
              },  
              "& .MuiSwitch-track": {
                backgroundColor: "rgba(52, 52, 52, 1)",
                height: "30px",
                width: "130px",
                borderRadius: "16px",
                ...trackStyles,
                "&:before": {
                  content: '"NIGHTMODE"',
                  color: "rgba(255, 255, 255, 1)",
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                },
              },
              "& .MuiSwitch-thumb": {
                ...thumbStyles,
                backgroundImage: "url(./imgs/dark.svg)",
                transform: "translateX(-20px)",
              },
              "&.MuiButtonBase-root-MuiSwitch-switchBase:hover":
                  {
                    display: "none",
                  },
            }}
            control={<Switch defaultChecked />}
            label=""
          />
        </div>
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, Autoplay]}
          className="slider-container-slides"
          style={{
            height: "100%",
            width: "100%",
            overflowX:"visible",
            }}
        >
          {
          photos.length>0&&slideId.map((id) => (
            <SwiperSlide key={id} style={{ display: "flex", gap: "20px" }}>
              <SlideItem
          key={photos[id].id}
          slide={{
            url: photos[id].src.original,
            alt: photos[id].alt,
            title: photo_titles[id],
          }}
              />
              {
          <SlideItem
            key={id + 1}
            slide={{
              url: photos[id + 1]?photos[id + 1].src.original:null,
              alt: photos[id + 1]?photos[id + 1].alt:null,
              title: photo_titles[id + 1],
            }}
          />
              }
            </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
      <div className="slider-footer">
          
      </div>
    </section>
  );
};
export default Slider;
