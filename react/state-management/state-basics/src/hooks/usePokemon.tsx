import { useState } from "react";

export const usePokemon = () => {
    const [pokemon, setPokemon] = useState<string[]>([]);

    const handlePokemonChange = (pokemon: string) => {
        if (pokemon !== null) {
            setPokemon((pokemons) => [pokemon, ...pokemons]);
        }
    };

    return { pokemon, handlePokemonChange };
};

export default usePokemon;
