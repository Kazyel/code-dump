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
        backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffffee",
        color: theme === "dark" ? "#ffffffee" : "#1a1a1a",
        transition: "all 0.25s",
    };

    const buttonStyle = {
        backgroundColor: theme === "dark" ? "#ffffffee" : "#1a1a1a",
        color: theme === "dark" ? "#1a1a1a" : "#ffffffee",
        transition: "all 0.25s",
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
