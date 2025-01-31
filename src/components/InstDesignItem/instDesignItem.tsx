import React, { useContext } from "react";
import "./instDesignItem.scss";
import { ThemeContext } from "../../contexts/themeContext";
interface InstDesignItemProps {
    title: string;
    description: string;
    items: string[];
}
const InstDesignItem: React.FC<InstDesignItemProps> = ({title, description, items}) => {
    const {isDark} = useContext(ThemeContext);
    console.log("isDark",isDark);
    return(
        <div className="instructional-design-description-item" style={{ color: isDark!==false ? " rgba(255, 255, 255, 1)":"rgba(66, 66, 66, 1)" }}>
            <h3>
                {title}
            </h3>
            <p>{description}</p>
            <ul>
                {items.map((item, index) => {
                    return(
                        <li  key={index}>
                            <img src="./imgs/tick.svg" style={{width:"30px", height:"30px"}}alt="tick" />
                            <p>{item}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};
export default InstDesignItem;