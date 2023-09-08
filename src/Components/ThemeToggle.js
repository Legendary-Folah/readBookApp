import React, {Component} from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import Slider from "./Slider";

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        const { toggleTheme } = this.context
        return (
            <div>
                <button onClick={toggleTheme}>
                    Toggle
                </button>
            </div>
        );
    }
}
 
export default ThemeToggle;