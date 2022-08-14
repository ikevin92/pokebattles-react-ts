import { ChangeEvent, useEffect, useState } from 'react';
import { searchPokemonForName } from '../redux';
import { useAppDispatch, useAppSelector } from '../redux';


export const Searcher = () => {

  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const { pokemonList } = useAppSelector(state => state.pokemon);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
    if (inputValue.length > 0) {
      console.log('esta cumpliendo la condicion');
      dispatch(searchPokemonForName(inputValue));
    }
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