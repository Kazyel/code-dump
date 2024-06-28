import { CounterState, NameState } from "./components/SimpleStates";
import UseReducerExample from "./components/UseReducerExample";
import UseRefExample from "./components/UseRefExample";
import Pokemons from "./components/Pokemons";
import CurrentTheme from "./components/CurrentTheme";

import "./App.css";
import ThemeProvider from "./context/genericContext";
import Title from "./components/Title";

function App() {
    return (
        <ThemeProvider>
            <main className="App">
                <Title />
                <div className="flex border content">
                    <CurrentTheme />
                    <CounterState />
                    <NameState />
                    <Pokemons />
                    <UseReducerExample />
                    <UseRefExample />
                </div>
            </main>
        </ThemeProvider>
    );
}

export default App;
