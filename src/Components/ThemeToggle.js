import React, {Component} from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import Slider from "./Slider";

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        const { toggleTheme } = this.context
        return (
            <Slider onChange={!toggleTheme}></Slider>
        );
    }
}
 
export default ThemeToggle;