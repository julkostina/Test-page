import React, { useEffect } from "react";
import "./list.scss";
import "swiper/css";
import "swiper/css/pagination";
import Search from "../Search/search.tsx";
import TypeButton, {typeStyles} from "../TypeButton/typeButton.tsx";
import OccupationButton from "../OccupationButton/occupationButton.tsx";
import {
  InstDesign,
  ElearnDevelopment,
  MobLearning,
  InstLedTraining,
} from "../Icons/icons.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const List: React.FC = () => {
  const [search, setSearch] = React.useState<string>("");
  const [type, setType] = React.useState<string[]>([]);
  const [occupation, setOccupation] = React.useState<string>("");
  let itemDescriptions = [
    {
      name: "INSTRUCTIONAL DESIGN",
      description:
        "We provide full-service instructional design consulting. From standalone lessons to the series of courses, no job is too large or too small for us.",
      img: (
        <InstDesign
          fill={type.length !== 0 ? type[0] : "rgba(220, 206, 144, 1)"}
          stroke={type[1] ? type[1] : "rgba(255, 255, 255, 1)"}
        />
      ),
    },
    {
      name: "ELEARNING DEVELOPMENT",
      description:
        "The eLearning products we create feature deep learner engagement and ensure high knowledge transfer.",
      img: (
        <ElearnDevelopment
          fill={type.length !== 0 ? type[0] : "rgba(220, 206, 144, 1)"}
          stroke={type[1] ? type[1] : "rgba(255, 255, 255, 1)"}
        />
      ),
    },
    {
      name: "MOBILE LEARNING",
      description:
        "Let us help you take your learning process anywhere your business may take you. Any place, any time, any device.",
      img: (
        <MobLearning
          fill={type.length !== 0 ? type[0] : "rgba(220, 206, 144, 1)"}
          stroke={type[1] ? type[1] : "rgba(255, 255, 255, 1)"}
        />
      ),
    },
    {
      name: "INSTRUCTOR-LED TRAINING",
      description:
        "We are experts at developing a classroom curriculum that meets your business needs and exceeds even your highest expectations.",
      img: (
        <InstLedTraining
          fill={type.length !== 0 ? type[0] : "rgba(220, 206, 144, 1)"}
          stroke={type[1] ? type[1] : "rgba(255, 255, 255, 1)"}
        />
      ),
    },
  ];
  const arrayOfOccupations = typeStyles.map((style,index) => {
   return  itemDescriptions.map((item) => {
    console.log("occupation",occupation);
      return {
        name: item.name,
        description: item.description,
        img: React.cloneElement(item.img, { fill: style.background, stroke: style.border?style.type[1]:"rgb(255, 255, 255)"}),
        hrStyle: style.background!=="rgba(217, 217, 217, 0)"?style.background:style.type[1]
      };
    });
  });
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      let res='';
      if(index===0){
       res+='<button className="pagination-button"><img src="./imgs/arrow-grey.svg"/></button>';
      }
      if(index<3&&index!==arrayOfOccupations.length-1){
        res+='<span class="' + className + '">' + (index + 1) + "</span>";
      }
      if(index===arrayOfOccupations.length-1){
        res+='<button className="pagination-button"><img src="./imgs/arrow-grey.svg"/></button>';
      }
      return res;
    }
  };
  return (
    <div className="list">
      <div className="list-top">
        <Search search={search} setSearch={setSearch} />
        <TypeButton type={type} setType={setType} />
        <OccupationButton
          occupation={occupation}
          setOccupation={setOccupation}
        />
      </div>
      <div className="list-description">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="list-description-swiper"
        >
          {arrayOfOccupations.filter(occupationArray => occupationArray.some(occupation => type.includes(occupation.name))).map((_, i) => (
            <SwiperSlide key={i} style={{
              display:"flex",
              gap:"75px"
            }}>
              {_.map((item, index) => (
                <div  key={index}>
                  {item.img}
                  <h3 style={{ paddingTop: "30px", fontSize: "14px" }}>
                    {item.name}
                  </h3>
                  <hr
                    style={{
                      border:"none",
                      height:"3px",
                      backgroundColor:
                        item.hrStyle,
                    }}  
                  />
                  <p>{item.description}</p>
                </div>
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default List;
