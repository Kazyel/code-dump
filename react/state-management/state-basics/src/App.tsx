import { CounterState, NameState } from "./components/SimpleStates";
import UseReducerExample from "./components/UseReducerExample";
import UseRefExample from "./components/UseRefExample";
import Pokemons from "./components/Pokemons";
import CurrentTheme from "./components/CurrentTheme";
import ThemeContext from "./context/genericContext";

import ReactLogo from "./assets/react.svg";
import "./App.css";
import { useState } from "react";

function App() {
    const [theme, setTheme] = useState("light");
    const value = { theme, setTheme };

    return (
        <ThemeContext.Provider value={value}>
            <main className="App">
                <div className="title">
                    <div className="title-main">
                        <img src={ReactLogo} alt="React Logo" width="72" />
                        <h1>State Management</h1>
                    </div>
                    <h3>Current theme is {value.theme}</h3>
                </div>
                <div className="flex border content">
                    <CurrentTheme />
                    <CounterState />
                    <NameState />
                    <Pokemons />
                    <UseReducerExample />
                    <UseRefExample />
                </div>
            </main>
        </ThemeContext.Provider>
    );
}

export default App;
