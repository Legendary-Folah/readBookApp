import React, { useContext} from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
// import Slider from "./Slider";

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
            <div>
                <button onClick={toggleTheme}>
                    Toggle
                </button>
            </div>
    );
}
 
export default ThemeToggle;
 