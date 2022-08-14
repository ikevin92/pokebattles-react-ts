import { loadPokemonsApi } from '../../services';
import { IPokemonState } from '../interfaces';
import { setLoading, setPokemonList } from './pokemonSlice';
import { Pokemon } from '../interfaces/pokemon';



export const loadPokemons = (): any => {
  return async (dispatch: any, getState: IPokemonState) => {
    dispatch(setLoading(true));
    const pokemons = await loadPokemonsApi();
    dispatch(setPokemonList(pokemons));
    dispatch(setLoading(false));
  };
};

export const addPokemonBattle = (id: string): any => {
  return (dispatch: any, getState: any) => {
    console.log({ id });
    const { pokemon } = getState();
    const { battleList, pokemonList } = pokemon;
    const newPokemonList = pokemonList.map((pokemon: Pokemon) => {
      if (pokemon.id === id) {
        return { ...pokemon, isBattle: true };
      }
      return pokemon;
    })

    dispatch(setPokemonList(newPokemonList));
  };
};

export const removePokemonBattle = (id: string) => {
  return (dispatch: any, getState: any) => {
    console.log({ id });
    const { pokemon } = getState();
    const { battleList, pokemonList } = pokemon;
    const newPokemonList = pokemonList.map((pokemon: Pokemon) => {
      if (pokemon.id === id) {
        return { ...pokemon, isBattle: false };
      }
      return pokemon;
    });

    dispatch(setPokemonList(newPokemonList));
  };

}