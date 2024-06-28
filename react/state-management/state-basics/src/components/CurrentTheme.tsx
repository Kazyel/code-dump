import { useContext } from "react";
import { ThemeContext } from "../context/genericContext";

const CurrentTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleChangeTheme = () => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    const bgStyle = {
        backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
        color: theme === "dark" ? "#ffffff" : "#1a1a1a",
    };

    const buttonStyle = {
        backgroundColor: theme === "dark" ? "#ffffff" : "#1a1a1a",
        color: theme === "dark" ? "#1a1a1a" : "#ffffff",
    };

    return (
        <div className="card" style={bgStyle}>
            <h2>Current Theme is {theme}</h2>
            <button onClick={handleChangeTheme} style={buttonStyle}>
                Change Theme
            </button>
        </div>
    );
};

export default CurrentTheme;
