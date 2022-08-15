import { loadPokemonByIdTerm, loadPokemonsApi } from '../../services';
import { IPokemonState } from '../interfaces';
import { Pokemon } from '../interfaces/pokemon';
import { setLoading, setPokemonDetail, setPokemonFilterList, setPokemonList, setSearcherValue } from './pokemonSlice';



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
    dispatch(setSearcherValue(false));
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
    dispatch(setSearcherValue(false));

  };
};


export const searchPokemonForName = (value: string) => {
  return (dispatch: any, getState: any) => {
    const { pokemon } = getState();
    const { pokemonList } = pokemon;

    if (value.length > 0) {
      const newPokemonList = pokemonList.filter((pokemon: Pokemon) => {
        if (pokemon.nombre.includes(value) && !pokemon.isBattle) {
          return pokemon;
        }
      });
      console.log(`🚀 ~ file: thunks.ts ~ line 59 ~ newPokemonList ~ newPokemonList`, newPokemonList);
      dispatch(setPokemonFilterList(newPokemonList));
      // dispatch(setSearcherValue(true));
    } else {
      dispatch(setPokemonFilterList([]));
    }
  };
};

export const getPokemonDetail = (id: string) => {
  return async (dispatch: any, getState: any) => {
    dispatch(setLoading(true));
    const pokemon = await loadPokemonByIdTerm(id);
    dispatch(setPokemonDetail(pokemon));
    dispatch(setLoading(false));
  };
};

export const getValueSearcher = (value: boolean) => {
  return (dispatch: any, getState: any) => {
    dispatch(setSearcherValue(value));
  };

};