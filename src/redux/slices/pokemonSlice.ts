import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import { RootState } from '../store/';
import { IPokemonDetail, IPokemonState, Pokemon } from '../interfaces';


const initialState: IPokemonState = {
  pokemonDetail: {} as IPokemonDetail,
  pokemonList: [],
  battleList: [],
  isLoading: false,
  filterList: [],
  isSearcher: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonDetail: (state, action: PayloadAction<IPokemonDetail>) => {
      state.pokemonDetail = action.payload;
    },
    setPokemonList: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemonList = action.payload;
    },
    setPokemonBattleList: (state, action: PayloadAction<Pokemon[]>) => {
      state.battleList = action.payload;
    },
    setPokemonFilterList: (state, action: PayloadAction<Pokemon[]>) => {
      state.filterList = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSearcherValue: (state, action: PayloadAction<boolean>) => {
      state.isSearcher = action.payload;
    }
  }
});

export const { setPokemonDetail, setPokemonList, setPokemonBattleList, setLoading, setPokemonFilterList, setSearcherValue } = pokemonSlice.actions;

export default pokemonSlice.reducer;