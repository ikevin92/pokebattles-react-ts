import { PokemonListResponse, PokemonResponse } from '../interface';
import { Pokemon, PokemonDetails } from '../redux';

export const pokemonDetailAdapter = (pokemon: PokemonResponse): PokemonDetails => {
  console.log({ pokemon });

  return {
    imagen: pokemon.sprites.front_default,
    nombre: pokemon.name,
    numero: pokemon.id,
    altura: pokemon.height,
    tipo: pokemon.types[0].type.name,
    estadisticasBase: {
      ataque: pokemon.stats[1].base_stat,
      defensa: pokemon.stats[2].base_stat,
      ataqueEspecial: pokemon.stats[3].base_stat,
      defensaEspecial: pokemon.stats[4].base_stat,
      velocidad: pokemon.stats[5].base_stat,
    }
  };
};

export const pokemonListAdapter = (pokemons: PokemonListResponse): Pokemon[] => {
  console.log({ pokemons });

  return pokemons.results.map(pokemon => ({
    id: extraerId(pokemon.url),
    nombre: pokemon.name,
    imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ extraerId(pokemon.url) }.png`,
    isBattle: false,
  }));
};


const extraerId = (url: string): string => {
  let id = '';
  const urlArray = url.split('/');
  id = urlArray[urlArray.length - 2];
  return id.trim();
};
