import "./App.css";
import UseReducerExample from "./components/UseReducerExample";
import { CounterState, ListState, NameState } from "./components/SimpleStates";
import ReactLogo from "./assets/react.svg";
import UseRefExample from "./components/UseRefExample";
import Pokemons from "./components/Pokemons";

function App() {
    return (
        <div className="App">
            <div className="flex title">
                <img src={ReactLogo} alt="React Logo" width="72" />
                <h1>State Management</h1>
            </div>
            <div className="flex border">
                <CounterState />
                <NameState />
                <ListState />
                <UseReducerExample />
                <UseRefExample />
                <Pokemons />
            </div>
        </div>
    );
}

export default App;
