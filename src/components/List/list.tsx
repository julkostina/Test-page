import React, { use, useEffect } from "react";
import "./list.scss";
import "swiper/css";
import "swiper/css/pagination";
import Search from "../Search/search.tsx";
import TypeButton, { typeStyles } from "../TypeButton/typeButton.tsx";
import OccupationButton from "../OccupationButton/occupationButton.tsx";
import {
  InstDesign,
  ElearnDevelopment,
  MobLearning,
  InstLedTraining,
} from "../Icons/icons.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import { ThemeContext } from "../../contexts/themeContext.tsx";

const List: React.FC = () => {
  const [search, setSearch] = React.useState<string>("");
  const [type, setType] = React.useState<string[]>([]);
  const [occupation, setOccupation] = React.useState<string>("All");
  const [sliderContent, setSliderContent] = React.useState<SwiperCore | null>(
    null
  );
  const { isDark } = React.useContext(ThemeContext);
  type ItemDescription = {
    name: string;
    description: string;
    img: React.ReactElement<React.SVGProps<SVGElement>>;
  };

  let itemDescriptions: ItemDescription[] = [
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
  const arrayOfItems = typeStyles.slice(1).map((style) => {
    return itemDescriptions.flatMap((item) => {
      return {
        name: item.name,
        description: item.description,
        img: React.cloneElement(item.img, {
          fill: style.type[0],
          stroke: style.border ? style.type[1] : "rgb(255, 255, 255)",
        }),
        hrStyle:
          style.background !== "rgba(217, 217, 217, 0)"
            ? style.background
            : style.type[1],
      };
    });
  });
  const [arrayOfOccupations, setArrayOfOccupations] = React.useState<
    {
      name: string;
      description: string;
      img: React.ReactNode;
      hrStyle: string;
    }[]
  >(arrayOfItems.flatMap((item) => item));
  console.log("type: " + type[0]);
  React.useEffect(() => {
    if (occupation.toLocaleLowerCase() === "all" && type.length === 0) {
      setArrayOfOccupations(() => arrayOfItems.flat());
    }
    if (occupation.toLocaleLowerCase() !== "all" && type.length === 0) {
      setArrayOfOccupations(() =>
        arrayOfItems.flatMap((occupationArray) => {
          return occupationArray.filter(
            (occ) => occupation === occ.name.toLowerCase()
          );
        })
      );
    }
    if (occupation.toLocaleLowerCase() === "all" && type.length !== 0) {
      setArrayOfOccupations(() =>
        arrayOfItems.flatMap((occupationArray) => {
          return occupationArray.filter(
            (occ) =>
              React.isValidElement(occ.img) &&
              (occ.img.props as React.SVGProps<SVGElement>).fill === type[0]
          );
        })
      );
    }
    if (occupation.toLocaleLowerCase() !== "all" && type.length !== 0) {
      setArrayOfOccupations(() =>
        arrayOfItems.flatMap((occupationArray) => {
          return occupationArray.filter(
            (occ) =>
              occupation === occ.name.toLowerCase() &&
              React.isValidElement(occ.img) &&
              (occ.img.props as React.SVGProps<SVGElement>).fill === type[0]
          );
        })
      );
    }
  }, [occupation, type]);

  let pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      let res = "";
      if(index<3)
      res += `<span class="${className} ${isDark ? "isDark" : ""}">${index + 1}</span>`;
      return res;
    },
  };
  React.useEffect(() => {
    pagination = {
      clickable: true,
      renderBullet: function (index, className) {
        let res = "";
        res += `<span class="${className} ${isDark ? "isDark" : ""}">${index + 1}</span>`;
        return res;
      },
    };
  }, [isDark]);
  return (
    <div className="list">
      <div className="list-top">
        <Search search={arrayOfOccupations} setSearch={setArrayOfOccupations} />
        <TypeButton type={type} setType={setType} />
        <OccupationButton
          occupation={occupation}
          setOccupation={setOccupation}
        />
      </div>
      <div className="list-description">
        <Swiper
          modules={[Pagination, Navigation]}
          onSwiper={setSliderContent}
          className="list-description-swiper"
          slidesPerView={4}
          slidesPerGroup={4}
          spaceBetween={75}
          pagination={pagination}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {arrayOfOccupations.map((item, index) => {
            return (
              <SwiperSlide>
                <div key={index}>
                  {item.img}
                  <h3 style={{ paddingTop: "30px", fontSize: "14px" }}>
                    {item.name}
                  </h3>
                  <hr
                    style={{
                      border: "none",
                      height: "3px",
                      backgroundColor: item.hrStyle,
                    }}
                  />
                  <p>{item.description}</p>
                </div>
              </SwiperSlide>
            );
          })}
          
          <div className={`swiper-button-prev ${isDark?"isDarkButton":""}`} ></div>
          <div className={`swiper-button-next ${isDark?"isDarkButton":""}`}></div>
        </Swiper>
      </div>
    </div>
  );
};

export default List;
