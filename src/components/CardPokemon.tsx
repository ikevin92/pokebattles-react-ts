import { FC, useEffect, useState } from 'react';
import { addPokemonBattle, Pokemon, removePokemonBattle, useAppDispatch } from '../redux';


interface Props {
  pokemon: Pokemon;
}

export const CardPokemon: FC<Props> = ({ pokemon }) => {
  const { id, imagen, nombre, isBattle } = pokemon;
  const dispatch = useAppDispatch()

  const handleAddBattleList = (id: string) => {
    console.log(id);
    dispatch(addPokemonBattle(id));
  };

  const handleRemoveBattleList = (id: string) => {
    console.log(id);
    dispatch(removePokemonBattle(id));
  };

  return (
    <div className='col g-2'>
      {/* <img src={ imagen } className="img-thumbnail" alt={ nombre } />
      <p>{ nombre }</p> */}
      <div className="card shadow">
        <img src={ imagen } className="bd-placeholder-img card-img-top" alt={ nombre } />
        {
          isBattle ?
            (<button
              onClick={ () => handleRemoveBattleList(id) }
              type="button" className="btn btn-danger position-absolute rounded-circle m-1 top-0 end-0">
              <i className="fa-solid fa-trash-can"></i>
            </button>) :
            (<button
              onClick={ () => handleAddBattleList(id) }
              type="button" className="btn btn-success position-absolute rounded-circle m-1 top-0 end-0">
              <i className="fa-solid fa-plus"></i>
            </button>)
        }
        <div className="card-body">
          <p className="card-text">{ nombre }</p>
        </div>
      </div>

    </div>
  );
};