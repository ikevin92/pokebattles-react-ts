import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetail, useAppDispatch, useAppSelector } from '../redux';


interface Props {
  // pokemon: IPokemonDetail;
}


const CardDetail: FC<Props> = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const { pokemonDetail } = useAppSelector(state => state.pokemon);
  console.log(`🚀 ~ file: CardDetail.tsx ~ line 17 ~ pokemonDetail`, pokemonDetail);

  useEffect(() => {
    dispatch(getPokemonDetail(id as string));
  }, [id]);

  if (!pokemonDetail) {
    return (<p>Loading</p>);
  }

  return (
    <div className="card shadow">
      <img src={ pokemonDetail.imagen } className="card-img-top" alt={ pokemonDetail.nombre } />
      <div className="card-body bg-black">
        <h5 className="card-title text-capitalize">{ pokemonDetail.nombre }
          <strong> #{ pokemonDetail.numero }</strong>
        </h5>
        <p className="card-text">
          <strong>Tipo:</strong> { pokemonDetail.tipo }
          <br />
           <strong>Velocidad:</strong> { pokemonDetail.estadisticasBase.velocidad }
          <br />
          <strong>Altura:</strong> { pokemonDetail.altura }
          <br />
          <strong>Ataque:</strong> { pokemonDetail.estadisticasBase.ataque }
          <br />
          <strong>Ataque Especial:</strong> { pokemonDetail.estadisticasBase.ataqueEspecial }
          <br />
          <strong>Defensa:</strong> { pokemonDetail.estadisticasBase.defensa }
          <br />
          <strong>Defensa Especial:</strong> { pokemonDetail.estadisticasBase.defensaEspecial }

        </p>
      </div>
    </div>

  );
};
export default CardDetail;