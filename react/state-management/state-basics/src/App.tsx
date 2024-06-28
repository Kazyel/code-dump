import { CounterState, NameState } from "./components/SimpleStates";
import UseReducerExample from "./components/UseReducerExample";
import UseRefExample from "./components/UseRefExample";
import CurrentTheme from "./components/CurrentTheme";
import ThemeProvider from "./context/genericContext";
import List from "./components/List";
import Title from "./components/Title";

import "./App.css";

function App() {
    return (
        <ThemeProvider>
            <main className="App">
                <Title />
                <div className="flex border content">
                    <CurrentTheme />
                    <CounterState />
                    <NameState />
                    <List />
                    <UseReducerExample />
                    <UseRefExample />
                </div>
            </main>
        </ThemeProvider>
    );
}

export default App;
