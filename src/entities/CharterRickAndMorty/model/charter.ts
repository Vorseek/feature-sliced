import { createEffect, createStore } from 'effector';
import { getRickAndMortyCharter } from 'shared/api/services/RickAndMorty';

interface Charter {
  info: any;
  results: any;
}

export const fetchRickAndMortyCharter = createEffect(async () => {
  const req = await getRickAndMortyCharter();
  return req.data;
});

export const $rickCharter = createStore<Charter | null>(null).on(
  fetchRickAndMortyCharter.doneData,
  (_, payload) => payload
);
