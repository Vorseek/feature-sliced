import { createStore,/*  createEffect,  */createEvent } from 'effector';

interface InputStore {
  [email: string]: string;
}

export const getInputText = createEvent<InputStore>();

export const $input = createStore<InputStore>({}).on(getInputText, (state, data) => ({
  ...state,
  [data.email]: data.msg,
}));
