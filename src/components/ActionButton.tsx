import { FC } from 'react';
import { useAppDispatch, addPokemonBattle, removePokemonBattle } from '../redux';


interface Props {
  id: string,
  isBattle: boolean,
  isActive: boolean,
}

export const ActionButton: FC<Props> = ({ id, isBattle, isActive }) => {
  const dispatch = useAppDispatch();


  const handleAddBattleList = (id: string) => {
    console.log(id);
    dispatch(addPokemonBattle(id));
  };

  const handleRemoveBattleList = (id: string) => {
    console.log(id);
    dispatch(removePokemonBattle(id));
  };

  if (isBattle) {
    return (
      <button
        onClick={ () => handleRemoveBattleList(id) }
        type="button" className="btn btn-danger position-absolute rounded-circle m-1 top-0 end-0">
        <i className="fa-solid fa-trash-can"></i>
      </button>
    );
  }

  if (!isBattle && isActive) {
    return (
      <button
        onClick={ () => handleAddBattleList(id) }
        type="button" className="btn btn-success position-absolute rounded-circle m-1 top-0 end-0">
        <i className="fa-solid fa-plus"></i>
      </button>
    );
  }

  return null;
};