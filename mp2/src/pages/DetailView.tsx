import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPokemonDetails } from "../api/pokemonApi";

const DetailView = () => {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) getPokemonDetails(id).then(setPokemon);
  }, [id]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Types: {pokemon.types.map((t: any) => t.type.name).join(", ")}</p>

      <button onClick={() => navigate(`/detail/${parseInt(id!) - 1}`)}>Previous</button>
      <button onClick={() => navigate(`/detail/${parseInt(id!) + 1}`)}>Next</button>
    </div>
  );
};
export default DetailView;
