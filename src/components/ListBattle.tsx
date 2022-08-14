import { useEffect } from 'react';
import { loadPokemons, useAppDispatch, useAppSelector } from '../redux';
import { CardPokemon } from './CardPokemon';

export const ListBattle = () => {
  const dispatch = useAppDispatch();
  const { isLoading, pokemonList } = useAppSelector(state => state.pokemon);
  console.log(`🚀 ~ file: ListPokemon.tsx ~ line 10 ~ ListPokemon ~ pokemonList`, pokemonList);
  // const [pokemon, setPokemon] = useState([]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (pokemonList.filter(pokemon => pokemon.isBattle).length === 0) {
    return (
      <div className=''>
        <h4>Lista vacia, no hay ningun pokemon listo
        </h4>
      </div>
    );
  }

  return (
    <div className='album'>

      <div className='container'>
        <div className='row row-cols-2 p-3'>

          {
            pokemonList.map((pokemon) => {
              if (pokemon.isBattle) {
                return (
                  <CardPokemon key={ pokemon.id } pokemon={ pokemon } />
                );
              }
            }
            )
          }
        </div>
      </div>
    </div>
  );
};