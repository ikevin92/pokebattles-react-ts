import { pokemonDetailAdapter, pokemonListAdapter } from '../adapters';
import pokeApi from '../api/pokeApi';
import { PokemonListResponse } from '../interface';
import { PokemonResponse } from '../interface/pokemon-full';
import { Pokemon } from '../redux';


export const loadPokemonsApi = async (): Promise<Pokemon[] | any> => {

  try {
    const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);

    const pokemons = pokemonListAdapter(data);
    return pokemons;
  } catch (error) {
    console.error({ error });
    return error;
  }
};


export const loadPokemonByIdTerm = async (term: string): Promise<PokemonResponse| any> => {


  try {
    const { data } = await pokeApi.get<PokemonResponse>(`/pokemon/${ term }`);

    const pokemon = pokemonDetailAdapter(data);

    return pokemon;
  } catch (error) {
    console.error({ error });
    return error;
  }

};
