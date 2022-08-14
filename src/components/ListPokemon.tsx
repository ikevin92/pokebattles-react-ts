import { useEffect } from 'react';
import { loadPokemons, useAppDispatch, useAppSelector } from '../redux';
import { CardPokemon } from './CardPokemon';

export const ListPokemon = () => {
  const dispatch = useAppDispatch();
  const { isLoading, pokemonList } = useAppSelector(state => state.pokemon);
  console.log(`🚀 ~ file: ListPokemon.tsx ~ line 10 ~ ListPokemon ~ pokemonList`, pokemonList);
  // const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    dispatch(loadPokemons());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='album bg-body'>

      <div className='container'>
        <div className='row row-cols-4'>

          {
            pokemonList.map((pokemon) => {
              if (!pokemon.isBattle) {
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