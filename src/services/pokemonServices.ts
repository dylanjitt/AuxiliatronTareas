import { pokeAPI,internarAPI } from "./apis"

export const getPokemonById = async (pokemonId)=> {
  const pokemonData = await pokeAPI.get(`/pokemon/${pokemonId}`)
  console.log("` file`")
  return pokemonData.data;

}

export const getPokemonsCaptured = async ()=> {
  const pokemons = await internarAPI.get('/pokemons');
  return pokemons;

}

export const postPokemonsCaptured = async (pokemonCaptured:any)=>{
  const pokemons = await internarAPI.post('/pokemons',pokemonCaptured);
  return pokemons.data|
}