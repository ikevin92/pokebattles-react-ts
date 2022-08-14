import { useEffect } from 'react';
import { CardPokemon } from '.';
import { loadPokemons, useAppDispatch, useAppSelector } from '../redux';

export const ListPokemon = () => {
  const dispatch = useAppDispatch();
  const { isLoading, pokemonList, filterList } = useAppSelector(state => state.pokemon);

  useEffect(() => {
    if (pokemonList.length === 0) {
      dispatch(loadPokemons());
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='album bg-body'>

      <div className='container'>
        <div className='row row-cols-4'>

          {
            filterList.length >0 ?
              (filterList.map((pokemon) => {
                if (!pokemon.isBattle) {
                  return (
                    <CardPokemon key={ pokemon.id } pokemon={ pokemon } />
                  );
                }
              })
              )
              :
              (pokemonList.map((pokemon) => {
                if (!pokemon.isBattle) {
                  return (
                    <CardPokemon key={ pokemon.id } pokemon={ pokemon } />
                  );
                }
              })
              )
          }
        </div>
      </div>
    </div>
  );
};