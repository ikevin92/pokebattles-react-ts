import { useNavigate } from 'react-router-dom';
import { CardDetail } from '../../components';
import { useAppSelector } from '../../redux';


export const DetailPage = () => {

  const { pokemonDetail, isLoading } = useAppSelector(state => state.pokemon);
  console.log(`🚀 ~ file: DetailPage.tsx ~ line 11 ~ DetailPage ~ pokemonDetail`, pokemonDetail);

  const navigate = useNavigate();

  if (isLoading && !pokemonDetail) return <div>Loading...</div>;

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
          <CardDetail />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">Agregar a la lista</button>
        </div>

      </div>


    </div>
  );
};