import { useAppDispatch, useAppSelector } from '../redux';
import { CardPokemon } from './CardPokemon';

export const ListBattle = () => {
  const dispatch = useAppDispatch();
  const { isLoading, pokemonList } = useAppSelector(state => state.pokemon);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (pokemonList.filter(pokemon => pokemon.isBattle).length === 0) {
    return (
      <div className='container-fluid vh-100 row align-items-center justify-content-center flex-row'>
        <h4 className='col'>Lista vacia, no hay ningun pokemon listo
        </h4>
      </div>
    );
  }

  return (
    <div className='album'>

      <div className='container'>
        <div className='row  row-cols-sm-1 row-cols-md-2 p-1'>

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