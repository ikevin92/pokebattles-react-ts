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
    console.log({ error });
    return error;
  }
};


export const loadPokemonByIdTerm = async (term: string) => {

  if (!term) throw new Error('No se ha ingresado un termino de busqueda');

  try {
    const { data } = await pokeApi.get<PokemonResponse>(`/pokemon/${ term }`);
    console.log(`🚀 ~ file: pokemon.services.ts ~ line 31 ~ loadPokemonByIdTerm ~ data`, data);

    const pokemon = pokemonDetailAdapter(data);

    return pokemon;
  } catch (error) {
    console.log({ error });
    return error;
  }

};
