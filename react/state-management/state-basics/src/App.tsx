import "./App.css";
import UseReducerExample from "./components/UseReducerExample";
import { CounterState, ListState, NameState } from "./components/SimpleStates";
import ReactLogo from "./assets/react.svg";

function App() {
    return (
        <div className="App">
            <img src={ReactLogo} alt="React Logo" width="72" />
            <h1>State Management</h1>
            <div
                style={{
                    borderBottom: "1px solid rgba(255, 255, 255, 0.25)",
                    marginBottom: "3rem",
                }}
            ></div>
            <div className="flex">
                <CounterState />
                <NameState />
                <ListState />
                <UseReducerExample />
            </div>
        </div>
    );
}

export default App;
