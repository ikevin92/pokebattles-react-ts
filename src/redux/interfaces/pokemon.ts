export interface PokemonDetails {
  imagen: string;
  nombre: string;
  numero: number;
  altura: number;
  tipo: string;
  estadisticasBase: EstadisticasBase;
}

export interface EstadisticasBase {
  ataque: number;
  defensa: number;
  ataqueEspecial: number;
  defensaEspecial: number;
  velocidad: number;
}

export interface Pokemon {
  id: string;
  nombre: string;
  imagen: string;
  isBattle: boolean;
}

export interface IPokemonState {
  pokemonDetail: PokemonDetails;
  pokemonList: Pokemon[];
  battleList: Pokemon[];
  isLoading: boolean;
}