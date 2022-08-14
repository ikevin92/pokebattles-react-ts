import { loadPokemonsApi } from '../../services';
import { IPokemonState } from '../interfaces';
import { setLoading, setPokemonFilterList, setPokemonList } from './pokemonSlice';
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
    const { pokemon } = getState();
    const { pokemonList, filterList } = pokemon;
    const newPokemonList = pokemonList.map((pokemon: Pokemon) => {
      if (pokemon.id === id) {
        return { ...pokemon, isBattle: true };
      }
      return pokemon;
    });
    dispatch(setPokemonList(newPokemonList));
    dispatch(setPokemonFilterList([]));
  };
};

export const removePokemonBattle = (id: string) => {
  return (dispatch: any, getState: any) => {
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
};


export const searchPokemonForName = (value: string) => {
  return (dispatch: any, getState: any) => {
    console.log({ value });
    const { pokemon } = getState();
    const { pokemonList } = pokemon;
    if (value.length > 0) {
      const newPokemonList = pokemonList.filter((pokemon: Pokemon) => {
        if (pokemon.nombre.includes(value) && !pokemon.isBattle) {
          return pokemon;
        }
      });
      dispatch(setPokemonFilterList(newPokemonList));
    }else{
      dispatch(setPokemonFilterList([]));
    }
  };
};
