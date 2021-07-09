import axios from 'axios';

// TODO: добавить переменные окружения
const urlRick = 'https://rickandmortyapi.com/api';
const urlJSONPlaceholder = 'https://jsonplaceholder.typicode.com/';

export const instanceRick = axios.create({
  baseURL: urlRick,
});

export const instancePlaceholder = axios.create({
  baseURL: urlJSONPlaceholder,
});
