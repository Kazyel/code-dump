import { useEffect, useState } from "react";

export function CounterState() {
    const [count, setCount] = useState(0);
    const addCount = () => setCount(count + 1);

    useEffect(() => {
        console.log("Count state updated, count is now", count);
    }, [count]);

    return (
        <div className="card">
            <p>Count: {count}</p>
            <button onClick={addCount}>Increment</button>
        </div>
    );
}

export function NameState() {
    const [name, setName] = useState("");
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value);

    return (
        <div className="card">
            <input type="text" value={name} onChange={changeName} />
            <p>Name: {name}</p>
        </div>
    );
}
