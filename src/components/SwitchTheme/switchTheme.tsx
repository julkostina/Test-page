import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
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
const SwitchTheme:React.FC = () => {
    return  <FormControlLabel
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
}
export default SwitchTheme;