import { useEffect, useState } from "react";
import { getPokemonList, getPokemonDetails } from "../api/pokemonApi";
import { Link } from "react-router-dom";

const GalleryView = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    getPokemonList(30).then(async list => {
      const details = await Promise.all(list.map((p: any) => getPokemonDetails(p.name)));
      setPokemons(details);
    });
  }, []);

  const filtered = filterType ? pokemons.filter(p => p.types.some((t: any) => t.type.name === filterType)) : pokemons;

  return (
    <div>
      <select onChange={e => setFilterType(e.target.value)}>
        <option value="">All Types</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
      </select>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filtered.map(p => (
          <Link to={`/detail/${p.id}`} key={p.id}>
            <img src={p.sprites.front_default} alt={p.name} />
            <p>{p.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default GalleryView;
