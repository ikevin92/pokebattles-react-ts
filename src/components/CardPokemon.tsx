import { FC, useEffect, useMemo, useState } from 'react';
import { ActionButton } from '.';
import { addPokemonBattle, Pokemon, removePokemonBattle, useAppDispatch, useAppSelector } from '../redux';


interface Props {
  pokemon: Pokemon;
}


export const CardPokemon: FC<Props> = ({ pokemon }) => {
  const { id, imagen, nombre, isBattle } = pokemon;
  const { pokemonList } = useAppSelector(state => state.pokemon);

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const isActive = useMemo(() => pokemonList.filter(pokemon => pokemon.isBattle).length < 6, [pokemonList]);

  return (
    <div className='col g-2'>
      <div className={`card shadow ${isHover ? 'bg-transparent' : ''}`}
        style={ { cursor: 'pointer' } }
        onMouseEnter={ handleMouseEnter }
        onMouseLeave={ handleMouseLeave }
      >
        <img src={ imagen } className="bd-placeholder-img card-img-top" alt={ nombre } />
        <ActionButton id={ id } isBattle={ isBattle } isActive={ isActive } />
        <div className="card-body">
          <p className="card-text">{ nombre }</p>
        </div>
      </div>
    </div>
  );
};