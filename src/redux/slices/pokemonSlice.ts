import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '../store/';
import { IPokemonState, Pokemon, PokemonDetails } from '../interfaces';


const initialState: IPokemonState = {
  pokemonDetail: {} as PokemonDetails,
  pokemonList: [],
  battleList: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<PokemonDetails>) => {
      state.pokemonDetail = action.payload;
    },
    setPokemonList: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemonList = action.payload;
    },
    setPokemonBattleList: (state, action: PayloadAction<Pokemon[]>) => {
      state.battleList = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

export const { setPokemon, setPokemonList, setPokemonBattleList, setLoading } = pokemonSlice.actions;

export default pokemonSlice.reducer;