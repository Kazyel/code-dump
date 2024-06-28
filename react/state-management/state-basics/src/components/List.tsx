import { useRef } from "react";
import usePokemon from "../hooks/usePokemon";

const List = () => {
    const { list, handleListChange } = usePokemon();
    const inputRef = useRef<HTMLInputElement>(null);
    const handleAddPokemon = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (!list.includes(inputRef.current!.value)) {
                handleListChange(inputRef.current!.value);
                inputRef.current!.value = "";
            }
        }
    };

    return (
        <div className="card">
            <input
                onChange={(e) => (inputRef.current!.value = e.target.value)}
                onKeyDown={(e) => {
                    handleAddPokemon(e);
                }}
                ref={inputRef}
                type="text"
                placeholder="Add any item..."
            />

            <ul className="item-list">
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <button>Add</button>
        </div>
    );
};

export default List;
