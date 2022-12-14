import { FC, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionButton } from '.';
import { Pokemon, useAppDispatch, useAppSelector } from '../redux';


interface Props {
  pokemon: Pokemon;
}


export const CardPokemon: FC<Props> = ({ pokemon }) => {
  const { id, imagen, nombre, isBattle } = pokemon;
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const { pokemonList } = useAppSelector(state => state.pokemon);

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleOnClick = (id: string) => {
    navigate(`/detail/${ id }`);
  };

  const isActive = useMemo(() => pokemonList.filter(pokemon => pokemon.isBattle).length < 6, [pokemonList]);

  return (
    <div className='col g-2 position-relative animate__animated animate__backInLeft'>
        <ActionButton card id={ id } isBattle={ isBattle } isActive={ isActive }
        />
      <div
        onClick={ () => handleOnClick(id) }
        className={ `card p-2 shadow ${ isHover ? 'bg-info' : '' }` }
        style={ { cursor: 'pointer' } }
        onMouseEnter={ handleMouseEnter }
        onMouseLeave={ handleMouseLeave }
      >
        <div className='p-1'>
        <img src={ imagen } className="bd-placeholder-img w-75 card-img-top" alt={ nombre } />
        </div>

        <div className="card-body p-0">
          <p className="card-text">{ nombre }</p>
        </div>
      </div>
    </div>
  );
};