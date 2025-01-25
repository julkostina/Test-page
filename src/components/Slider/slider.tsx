import React from "react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import SlideItem from "../SlideItem/slideItem.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css";
import "swiper/css/navigation";
import './slider.scss';
import "swiper/css/pagination";
interface SliderProps{
    photos:any[];
}
const Slider: React.FC<SliderProps> = ({ photos }) => {
      const slideId = [0,2,4];
     const photo_titles = [
        "Services",
        "Instructional Design",
        "eLearning Development",
        "eLearning Price Quote",
        "eLearning Packages",
        "Contact us",
      ];
return <Swiper
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
}
export default Slider;