import React from "react";
import "./typeButton.scss";
import ClearIcon from "@mui/icons-material/Clear";
interface TypeButtonProps {
  type: string[];
  setType: (type: string[]) => void;
}

const TypeButton: React.FC<TypeButtonProps> = ({ type, setType }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div className="type-button">
      <p>Type</p>
      {
        open?
        <div className="type-button-types">
            <ul className="type-button-types-container">
              
                <li onClick={()=>{
                    setType(["rgba(217, 217, 217, 1)"]);
                    setOpen(!open);
                }} style={{background:"rgba(217, 217, 217, 1)"}}></li>
                <li onClick={()=>{
                    setType(["rgba(231, 208, 140, 1)"]);
                    setOpen(!open);
                }}style={{background:"rgba(231, 208, 140, 1)"}}></li>
                <li onClick={
                    ()=>{
                        setType(["rgba(61, 148, 142, 1)"]);
                        setOpen(!open);
                    }
                } style={{background:"rgba(61, 148, 142, 1)"}}></li>
                <li onClick={
                    ()=>{
                        setType(["rgba(217, 217, 217, 0)", "rgba(61, 148, 142, 1)"]);
                        setOpen(!open);
                    }
                } style={{background:"rgba(217, 217, 217, 0)", border:"1px solid rgba(61, 148, 142, 1)"}}></li>
                <li onClick={
                    ()=>{
                        setType(["rgba(217, 217, 217, 0)", "rgba(231, 208, 140, 1)"]);
                        setOpen(!open);
                    }
                } style={{background:"rgba(217, 217, 217, 0)", border:"1px solid rgba(231, 208, 140, 1)"}}></li>
            </ul>
        </div>
        :null
      }
      {!open?<button
        className="type-button_open"
        onClick={() => {
          setOpen(!open);
        }}
        style={{background:!type?'rgba(235, 235, 235, 1)':type[0], border:type?`1px solid ${type[1]}`:"none"}}
      >
        <img src="./imgs/arrow.svg" alt="show types" />
      </button>:
      <ClearIcon  fontSize="small"
      sx={{
        height:"8px",
        width:"8px",
        '&:hover':{
            cursor:'pointer'
        }
      }}
      onClick={()=>{
        setOpen(!open);
      }}/>}
    </div>
  );
};
export default TypeButton;
