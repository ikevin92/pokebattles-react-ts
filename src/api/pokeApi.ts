import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';
const URL_IMG = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

const pokeApi = axios.create({
  baseURL: BASE_URL,
});

export default pokeApi;