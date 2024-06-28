import { createContext } from "react";

const ThemeContext = createContext<{
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}>({
    theme: "light",
    setTheme: () => {},
});

export default ThemeContext;
