import React, { useReducer } from "react";

function UseReducerExample() {
    const [state, dispatch] = useReducer(
        (
            state: { count: number; name?: string },
            action: { type: string; name?: string; difference?: number }
        ) => {
            switch (action.type) {
                case "incrementByNumber":
                    return { count: state.count + 1, name: state.name };
                case "decrementByNumber":
                    return { count: state.count - 1, name: state.name };
                case "incrementByName":
                    return {
                        count: state.count + 1,
                        name: action.name,
                    };
                case "decrementByName":
                    return {
                        count: state.count - action.difference!,
                        name: action.name,
                    };
                default:
                    return { count: state.count, name: state.name };
            }
        },
        { count: 0, name: "" }
    );

    const changeNameAndCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length < state.name!.length) {
            return dispatch({
                type: "decrementByName",
                name: e.currentTarget.value,
                difference: state.name!.length - e.currentTarget.value.length,
            });
        }

        return dispatch({
            type: "incrementByName",
            name: e.currentTarget.value,
        });
    };

    return (
        <div className="card">
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "incrementByNumber" })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "decrementByNumber" })}>
                Decrement
            </button>
            <input
                type="text"
                value={state.name}
                onChange={(e) => {
                    changeNameAndCount(e);
                }}
            />
            <p>Name: {state.name}</p>
        </div>
    );
}

export default UseReducerExample;
