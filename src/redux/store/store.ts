import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { IPokemonState } from '../interfaces';
import { pokemonSlice } from '../slices';

export interface AppStore {
  pokemon: IPokemonState;
}

export const store = configureStore<AppStore>({
  reducer: {
    pokemon: pokemonSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
