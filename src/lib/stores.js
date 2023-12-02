import { writable } from 'svelte/store';

const initialState = {
    logMessages: [],
    resources: []
};

export const game = writable(initialState);
