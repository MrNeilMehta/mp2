import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async (limit = 50, offset = 0) => {
  const res = await axios.get(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  return res.data.results;
};

export const getPokemonDetails = async (name: string) => {
  const res = await axios.get(`${BASE_URL}/pokemon/${name}`);
  return res.data;
};
