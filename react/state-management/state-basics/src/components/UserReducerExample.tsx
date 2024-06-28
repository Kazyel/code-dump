import { useReducer } from "react";

function UseReducerExample() {
    const [state, dispatch] = useReducer(
        (
            state: { count: number; name?: string },
            action: { type: string; name?: string }
        ) => {
            switch (action.type) {
                case "increment":
                    return { count: state.count + 1, name: "" };
                case "decrement":
                    return { count: state.count - 1, name: "" };
                case "setName":
                    return { count: state.count, name: action.name };
                default:
                    return state;
            }
        },
        { count: 0, name: "" }
    );

    return (
        <div className="card">
            <p>Count: {state.count}</p>

            <button onClick={() => dispatch({ type: "increment" })}>
                Increment
            </button>

            <button onClick={() => dispatch({ type: "decrement" })}>
                Decrement
            </button>

            <input
                type="text"
                value={state.name}
                onChange={(e) =>
                    dispatch({ type: "setName", name: e.target.value })
                }
            />
            <p>Name: {state.name}</p>
        </div>
    );
}

export default UseReducerExample;
