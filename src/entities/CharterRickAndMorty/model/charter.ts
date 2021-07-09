import { createEffect, createStore } from "effector";

interface Charter {
  info: any;
  results: any;
}

export const fetchRickAndMortyCharter = createEffect(async () => {
  const url = 'https://rickandmortyapi.com/api/character';
  const req = await fetch(url);
  return req.json();
});

export const $rickCharter = createStore<Charter | null>(null).on(
  fetchRickAndMortyCharter.doneData,
  (_, payload) => payload
);
