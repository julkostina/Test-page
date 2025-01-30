import React from "react";
import "./occupationButton.scss";
import ClearIcon from "@mui/icons-material/Clear";
import { ThemeContext } from "../../contexts/themeContext.tsx";
import { Arrow } from "../Icons/icons.tsx";
interface OccupationButtonProps {
  occupation: string;
  setOccupation: (occupation: string) => void;
}
const OccupationButton: React.FC<OccupationButtonProps> = ({
  occupation,
  setOccupation,
}) => {
  const { isDark } = React.useContext(ThemeContext);
  const[displayOccupation, setDisplayOccupation] = React.useState<string>("All");
  const occupations = [
    "All",
    "Instructional Design",
    "Elearning Development",
    "Mobile Learning",
    "Instructor-led Training",
  ];
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div
      className="occupation-button"
    >
      <p>Occupation</p>
      {open ? (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <ul className="occupation-button-container" >
            {occupations.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    setOccupation(item.toLowerCase());
                    setDisplayOccupation(item);
                    setOpen(!open);
                  }}
                >
                  <p   style={{ color:"rgba(52, 52, 52, 1)"}}               
                  >{item}</p>{" "}
                  {occupations.length - 1 === index ? (
                    <ClearIcon
                      sx={{
                        height: "8px",
                        width: "8px",
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                      onClick={() => {
                        setOpen(!open);
                      }}
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p className="occupation-button-default" style={{ color:"rgba(52, 52, 52, 1)"}}>{displayOccupation}</p>
      )}
      {!open ? (
        <button
          className="occupation-button_open"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Arrow stroke={isDark?  "rgba(255, 255, 255, 1)" : "rgba(52, 52, 52, 1)"}/>
        </button>
      ) : null}
    </div>
  );
};
export default OccupationButton;
