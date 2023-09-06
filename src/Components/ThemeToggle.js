import React, {Component} from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        return (
            <button onClick={}>Toggle</button>
        );
    }
}
 
export default ThemeToggle;