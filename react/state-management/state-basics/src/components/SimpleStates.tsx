import { useState } from "react";

export function CounterState() {
    const [count, setCount] = useState(0);
    const addCount = () => setCount(count + 1);

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

export function ListState() {
    const [list, setList] = useState<string[]>([]);
    const [nameState, setNameState] = useState("");

    const addItem = (name: string) => {
        if (!list.includes(name) && name.length > 0) {
            setList([...list, name]);
            setNameState("");
        }
    };

    return (
        <div className="card">
            <input
                type="text"
                value={nameState}
                onChange={(e) => setNameState(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        addItem(nameState);
                    }
                }}
            />
            <button onClick={() => addItem(nameState)}>Add Item</button>
            <div className="item-list">
                <ul>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
