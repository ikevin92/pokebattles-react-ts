import { ChangeEvent, useEffect, useState } from 'react';
import { getValueSearcher, searchPokemonForName } from '../redux';
import { useAppDispatch, useAppSelector } from '../redux';


export const Searcher = () => {

  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const { pokemonList } = useAppSelector(state => state.pokemon);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {

    if (e.target.value.trim().toLowerCase().length === 0) {
      setInputValue('');
      dispatch(getValueSearcher(false));
      return
    }

    setInputValue(e.target.value.trim().toLowerCase());
    dispatch(searchPokemonForName(inputValue));
    dispatch(getValueSearcher(true));

  };

  useEffect(() => {
    setInputValue('');
  }, [pokemonList]);

  return (
    <div className="container form-group p-5">
      <input
        onChange={ (e) => handleOnChange(e) }
        value={ inputValue }
        className="form-control form-control-lg" type="text" placeholder="Que Pokemon buscas.." id="buscador" />
    </div>

  );
};