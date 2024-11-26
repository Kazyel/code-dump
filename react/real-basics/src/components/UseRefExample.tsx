import { useEffect, useRef, useState } from "react";

const UseRefExample = () => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.value = `Count: ${count}`;
        }
    }, [count]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="card">
            <p>Count: {count}</p>
            <input ref={ref}></input>
        </div>
    );
};

export default UseRefExample;
