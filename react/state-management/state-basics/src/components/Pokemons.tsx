import { useRef } from "react";
import usePokemon from "../hooks/usePokemon";

const Pokemons = () => {
    const { pokemon, handlePokemonChange } = usePokemon();
    const inputRef = useRef<HTMLInputElement>(null);
    const handleAddPokemon = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (!pokemon.includes(inputRef.current!.value)) {
                handlePokemonChange(inputRef.current!.value);
                inputRef.current!.value = "";
            }
        }
    };

    return (
        <div className="card">
            <input
                onChange={(e) => (inputRef.current!.value = e.target.value)}
                onKeyDownCapture={(e) => {
                    handleAddPokemon(e);
                }}
                ref={inputRef}
                type="text"
                placeholder="Pokemon"
            />

            <ul className="item-list">
                {pokemon.map((pokemon, index) => (
                    <li key={index}>{pokemon}</li>
                ))}
            </ul>

            <button>Add</button>
        </div>
    );
};

export default Pokemons;
