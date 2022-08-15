import { FC } from 'react';
import { useAppDispatch, addPokemonBattle, removePokemonBattle } from '../redux';


interface Props {
  id: string,
  isBattle: boolean,
  isActive: boolean,
  card: boolean;
}

export const ActionButton: FC<Props> = ({ id, isBattle, isActive, card }) => {
  const dispatch = useAppDispatch();

  const handleAddBattleList = (id: string) => {
    dispatch(addPokemonBattle(id));

  };

  const handleRemoveBattleList = (id: string) => {
    dispatch(removePokemonBattle(id));
  };

  if (!card) {

    if (isBattle) {
      return (
        <button type="button" className="btn btn-danger" onClick={ () => handleRemoveBattleList(id) }>
          Eliminar de la lista
        </button>
      );
    }

    if (!isBattle && isActive) {
      return (
        <button type="button" className="btn btn-success"
          onClick={ () => handleAddBattleList(id) }
        >Agregar a la lista</button>
      );
    }

    return null;
  }

  if (card) {
    if (isBattle) {
      return (
        <button
          onClick={ () => handleRemoveBattleList(id) }
          type="button" className="btn btn-danger position-absolute rounded-circle m-3 top-0 end-0 btn-sm"
          style={ { zIndex: 1 } }
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      );
    }

    if (!isBattle && isActive) {
      return (
        <button
          onClick={ () => handleAddBattleList(id) }
          type="button" className="btn btn-success position-absolute rounded-circle m-3 top-0 end-0 btn-sm"
          style={ { zIndex: 1 } }
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      );
    }
  }



  return null;
};