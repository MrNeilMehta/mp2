import { useEffect, useState } from "react";
import { getPokemonList } from "../api/pokemonApi";
import { Link } from "react-router-dom";

const ListView = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"name" | "id">("name");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    getPokemonList().then(setPokemons);
  }, []);

  const filtered = pokemons
    .filter(p => p.name.includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "name") return order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      let idA = parseInt(a.url.split("/").slice(-2)[0]);
      let idB = parseInt(b.url.split("/").slice(-2)[0]);
      return order === "asc" ? idA - idB : idB - idA;
    });

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search Pokémon..." />
      <button onClick={() => setSort("name")}>Sort by Name</button>
      <button onClick={() => setSort("id")}>Sort by ID</button>
      <button onClick={() => setOrder(order === "asc" ? "desc" : "asc")}>Toggle Asc/Desc</button>

      <ul>
        {filtered.map(p => {
          let id = p.url.split("/").slice(-2)[0];
          return <li key={id}><Link to={`/detail/${id}`}>{p.name}</Link></li>;
        })}
      </ul>
    </div>
  );
};
export default ListView;
