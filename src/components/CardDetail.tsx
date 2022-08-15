import { FC } from 'react';
import { IPokemonDetail } from '../redux/interfaces/pokemon';

interface Props {
  pokemon: IPokemonDetail;
}

const CardDetail: FC<Props> = ({pokemon}) => {

  return (

    <div className="card shadow animate__animated animate__heartBeat">
      <img src={ pokemon.imagen } className="card-img-top" alt={ pokemon.nombre } />
      <div className="card-body bg-black">
        <h5 className="card-title text-capitalize">{ pokemon.nombre }
          <strong> #{ pokemon.numero }</strong>
        </h5>
        <p className="card-text">
          <strong>Tipo:</strong> { pokemon.tipo }
          <br />
          <strong>Velocidad:</strong> { pokemon.estadisticasBase.velocidad }
          <br />
          <strong>Altura:</strong> { pokemon.altura }
          <br />
          <strong>Ataque:</strong> { pokemon.estadisticasBase.ataque }
          <br />
          <strong>Ataque Especial:</strong> { pokemon.estadisticasBase.ataqueEspecial }
          <br />
          <strong>Defensa:</strong> { pokemon.estadisticasBase.defensa }
          <br />
          <strong>Defensa Especial:</strong> { pokemon.estadisticasBase.defensaEspecial }

        </p>
      </div>
    </div>

  );
};
export default CardDetail;