import React from "react";
import "./occupationButton.scss";
import ClearIcon from "@mui/icons-material/Clear";
interface OccupationButtonProps {
  occupation: string;
  setOccupation: (occupation: string) => void;
}
const OccupationButton: React.FC<OccupationButtonProps> = ({
  occupation,
  setOccupation,
}) => {
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
      onClick={() => setOccupation(occupation)}
    >
      <p>Occupation</p>
      {open ? (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <ul className="occupation-button-container">
            {occupations.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    setOccupation(item);
                    setOpen(!open);
                  }}
                >
                  <p>{item}</p>{" "}
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
        <p className="occupation-button-default">{occupations[0]}</p>
      )}
      {!open ? (
        <button
          className="occupation-button_open"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src="./imgs/arrow.svg" alt="show occupations" />
        </button>
      ) : null}
    </div>
  );
};
export default OccupationButton;
