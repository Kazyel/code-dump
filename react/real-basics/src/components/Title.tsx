import { useContext } from "react";
import ReactLogo from "../assets/react.svg";
import { ThemeContext } from "../context/genericContext";

const Title = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="title">
            <div className="title-main">
                <img src={ReactLogo} alt="React Logo" width="72" />
                <h1>State Management</h1>
            </div>
            <h3>Current theme is {theme}</h3>
        </div>
    );
};

export default Title;
