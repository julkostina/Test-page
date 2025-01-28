import React, { useEffect } from "react";
import "./list.scss";
import Search from "../Search/search.tsx";
import TypeButton from "../TypeButton/typeButton.tsx";
import OccupationButton from "../OccupationButton/occupationButton.tsx";
import {InstDesign, ElearnDevelopment,MobLearning, InstLedTraining, Arrow} from '../Icons/icons.tsx'


const List: React.FC = () => {
  const [search, setSearch] = React.useState<string>("");
  const [type, setType] = React.useState<string[]>([]);
  const [occupation, setOccupation] = React.useState<string>("");
  const typeStyle=[[
    "rgba(217, 217, 217, 1)",
  ],[
    "rgba(231, 208, 140, 1)"
  ],[
    "rgba(61, 148, 142, 1)"
  ],[
    "rgba(217, 217, 217, 0)",
    "1px solid rgba(61, 148, 142, 1)"
  ],[
    "rgba(217, 217, 217, 0)",
    "1px solid rgba(231, 208, 140, 1)"
  ]]
  const itemDescriptions = [
    {
      name: "INSTRUCTIONAL DESIGN",
      description: "We provide full-service instructional design consulting. From standalone lessons to the series of courses, no job is too large or too small for us.",
      img: <InstDesign fill={type.length!==0?type[0]:"rgba(220, 206, 144, 1)"} stroke={type[1]?type[1]:"rgba(255, 255, 255, 1)"}/>
    },
    {
      name: "ELEARNING DEVELOPMENT",
      description: "The eLearning products we create feature deep learner engagement and ensure high knowledge transfer.",
      img: <ElearnDevelopment fill={type.length!==0?type[0]:"rgba(220, 206, 144, 1)"} stroke={type[1]?type[1]:"rgba(255, 255, 255, 1)"}/>
    },
    {
      name: "MOBILE LEARNING",
      description: "Let us help you take your learning process anywhere your business may take you. Any place, any time, any device.",
      img: <MobLearning fill={type.length!==0?type[0]:"rgba(220, 206, 144, 1)"} stroke={type[1]?type[1]:"rgba(255, 255, 255, 1)"}/>
    },
    {
      name: "INSTRUCTOR-LED TRAINING",
      description: "We are experts at developing a classroom curriculum that meets your business needs and exceeds even your highest expectations.",
      img: <InstLedTraining fill={type.length!==0?type[0]:"rgba(220, 206, 144, 1)"} stroke={type[1]!=="none"?type[1]:"rgba(255, 255, 255, 1)"}/>
    }
  ];
  const [numOfIterations, setNumOfIterations] = React.useState<number>(type.length !== 0 ? 1 : 4);
console.log(occupation)
useEffect(() => {
    if (type.length !== 0) {
      setNumOfIterations(1);
    } else {
      setNumOfIterations(4);
    }
  },[type,occupation]);
  return (
    <div className="list">
      <div className="list-top">
      <Search search={search} setSearch={setSearch} />
      <TypeButton type={type} setType={setType}/>
      <OccupationButton occupation={occupation} setOccupation={setOccupation}/>
    </div>
      <div className="list-description">
      <ul>
        {Array.from({ length: numOfIterations }).map((_, i) => (
          itemDescriptions.map((item, index) => (
            <li key={index}>
              {item.img}
              <h3 style={{paddingTop:"30px", fontSize:"14px"}}>{item.name}</h3>
              <hr style={{backgroundColor: (type.length !== 0&&type[0]!=="rgba(217, 217, 217, 0)" ) ? type[0] : type[1]!=="none"?type[1]:"rgba(220, 206, 144, 1)" }}/>
              <p>{item.description}</p>
            </li>
          ))
        ))}
      </ul>
      </div>
        <div className="list-description-pagination">
        <Arrow fill="rgba(52, 52, 52, 0.1)" stroke="rgba(52, 52, 52, 0.1)" strokeWidth={2.25} className="arrow-left"/>
        <ul>
          <li className="active">1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <Arrow fill="rgba(52, 52, 52, 0.1)"  stroke="rgba(52, 52, 52, 0.1)" strokeWidth={2.25}/>
        </div>
    </div>
  );
};

export default List;
