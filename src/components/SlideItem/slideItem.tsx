import React from "react";
import "./slideItem.scss";
interface SlideItemProps{
    slide: {
        url: string;
        alt: string;
        title: string;
    };
}
const SlideItem: React.FC<SlideItemProps> = ({ slide }) => {
  return (
    <div className="slide-item" style={{ background: slide.url!==null?`url(${slide.url}) center`:"rgba(61, 148, 142, 1)", backgroundRepeat: "no-repeat", backgroundSize: "400px 400px" }}>
        <div style={{backdropFilter:slide.url!==null?"brightness(0.65)": "brightness(1)", borderRadius:"20px", display:"grid", alignContent:"center", gap:"12px" }}>
        {slide.url?null:<img src="./imgs/envelope.svg" alt="envelope"/>}
        <p>{slide.title}</p>
        </div>
    </div>
  );
};
export default SlideItem;