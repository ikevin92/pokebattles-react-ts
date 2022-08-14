import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ActionButton, CardDetail } from '../../components';
import { useAppSelector } from '../../redux';
import { loadPokemonByIdTerm } from '../../services';
import { IPokemonDetail } from '../../redux/interfaces/pokemon';


export const DetailPage = () => {

  const navigate = useNavigate();
  const params = useParams();

  const [loading, setLoading] = useState<boolean>(false);
  const [pokeInfo, setPokeInfo] = useState<IPokemonDetail | null>(null);

  const { pokemonList } = useAppSelector(state => state.pokemon);

  const getPokemon = async (id = '1') => {
    setLoading(true);
    const response: IPokemonDetail = await loadPokemonByIdTerm(params.id as string);
    setPokeInfo(response);

    setLoading(false);
  };

  const isActive = useMemo(() => pokemonList.filter(pokemon => pokemon.isBattle).length < 6, [pokemonList]);

  const isBattle = useMemo(() => pokemonList.filter(pokemon => +pokemon.id === pokeInfo?.numero && pokemon.isBattle).length > 0, [pokemonList]);

  useEffect(() => {
    getPokemon(params.id);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className='container'>
      <div className="row py-5 gap-3">
        <div className="col-2">
          <button
            onClick={ () => navigate('/') }
            type="button" className="btn btn-link">
            <i className="fa-solid fa-arrow-left-long text-capitalize">Volver</i>
          </button>
        </div>
        <div className="col-7">
          {
            pokeInfo && !loading ? (
              <CardDetail pokemon={ pokeInfo } />
            )
              : <p>Loading...</p>
          }
        </div>
        <div className="col-2">
          <ActionButton
            id={ `${ pokeInfo?.numero }` }
            isBattle={ isBattle }
            isActive={ isActive }
            card={ false }
          />
        </div>
      </div>
    </div>
  );
};